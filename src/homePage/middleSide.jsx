import React, {StrictMode} from 'react'
import { jwtDecode } from "jwt-decode"
import LikesFeat from "./features/likesFeat.jsx"
import CommentsFeat from "./features/commentsFeat.jsx"

class MiddleSide extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            likedPosts: {},
            commentText: {},
            refreshComments: {},
            refreshLikes: {},
            postText: '',
            visibility: 'public'
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token')

        if (!token) {
            console.error("Token não encontrado")
            return
        }

        try {
            const decoded = jwtDecode(token)
            const userId = decoded.userId

            if (!userId) {
                console.error('ID do usuário não encontrado no token decodificado.')
                return
            }

            fetch(`http://localhost:3000/posts/users/${userId}`)
                .then(res => res.json())
                .then(posts => {
                    this.setState({ posts })

                    const tokenHeader = {
                        headers: {
                            'Authorization': 'Bearer ' + token
                        }
                    }

                    const likeRequests = posts.map(post =>
                        fetch(`http://localhost:3000/likes/posts/${post.post_id}`, tokenHeader)
                            .then(res => res.json())
                            .then(data => {
                                const userLiked = data.some(like => like.user_id === userId)
                                return { postId: post.post_id, liked: userLiked }
                            })
                    )

                    Promise.all(likeRequests)
                        .then(results => {
                            const likedPosts = {}
                            results.forEach(({ postId, liked }) => {
                                likedPosts[postId] = liked
                            })
                            this.setState({ likedPosts })
                        })
                        .catch(err => console.log('Erro ao buscar likes dos posts:', err))
                })
                .catch(err => console.log('Erro ao buscar posts: ' + err))
        } catch (error) {
            console.error('Erro ao decodificar o token:', error)
        }
    }

    handleCommentChange = (postId, value) => {
        this.setState(prev => ({
            commentText: { ...prev.commentText, [postId]: value }
        }))
    }

    handlePostChange = (value) => {
        this.setState(prev => ({
            postText: value
        }))
    }

    handlePrivacidadeChange = (value) => {
        this.setState({ visibility: value })
    }

    handleLikeClick = (postId) => {
        const token = localStorage.getItem('token')
        const liked = this.state.likedPosts[postId]

        if (!token) {
            alert('Você precisa estar autenticado para curtir posts.')
            return
        }

        if (liked) {
            fetch(`http://localhost:3000/likes/post/${postId}`, {
                method: 'DELETE',
            }).then(() => {
                this.setState(prevState => ({
                    likedPosts: { ...prevState.likedPosts, [postId]: false },
                    refreshLikes: {
                        ...prevState.refreshLikes,
                        [postId]: (prevState.refreshLikes[postId] || 0) + 1
                    }
                }))
            }).catch(err => console.log("Erro ao remover like:", err))
        } else {
            fetch(`http://localhost:3000/likes/posts/${postId}/likes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({ like_type: 'like' })
            }).then(res => {
                if (!res.ok) throw new Error('Erro ao curtir')
                return res.json()
            }).then(() => {
                this.setState(prevState => ({
                    likedPosts: { ...prevState.likedPosts, [postId]: true },
                    refreshLikes: {
                        ...prevState.refreshLikes,
                        [postId]: (prevState.refreshLikes[postId] || 0) + 1
                    }
                }))
            }).catch(err => console.log("Erro ao dar like:", err))
        }
    }

    toogleComentario = (postId) => {
        const caixa = document.querySelector(`.post-${postId} .caixa-comentario`)
        if (caixa) {
            caixa.classList.toggle("d-none")
        }
    }

    publishComment = (postId) => {
        const token = localStorage.getItem('token')
        const comment = this.state.commentText[postId]

        if (!token) {
            alert('Você precisa estar autenticado para curtir posts.')
            return
        }

        if(comment === '') {
            return
        }

        fetch(`http://localhost:3000/comments/posts/${postId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({ content: comment })
        }).then(res => {
            if (!res.ok) throw new Error('Erro ao comentar')
            return res.json()
        }).then(() => {
            this.setState(prev => ({
                commentText: {...prev.commentText, [postId]: ''},
                refreshComments: {
                    ...prev.refreshComments,
                    [postId]: (prev.refreshComments[postId] || 0) + 1
                }
            }))
        }).catch(err => console.log("Erro ao dar like:", err))
    }

    publishPost = () => {
        const token = localStorage.getItem('token')
        const { postText, visibility} = this.state

        if (!token) {
            alert('Você precisa estar autenticado para curtir posts.')
            return
        }

        if(postText === '' || visibility === '') {
            return
        }

        fetch(`http://localhost:3000/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                content: postText,
                visibility: visibility
            })
        }).then(res => {
            if (!res.ok) throw new Error('Erro ao publicar post')
            return res.json()
        }).then(() => {
            this.setState(prev => ({postText: '', visibility: 'public'}))
            this.componentDidMount()
        }).catch(err => console.log("Erro ao dar like:", err))
    }

    render() {
        return (
            <div className="middle">
                <div className="post">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex align-items-center">
                            <img src="imagens2/benfica.jpg" alt="Foto de perfil" className="post-pics me-3"/>

                            <div className="flex-grow-1">
                                <div className="d-flex align-items-center gap-3 mb-2">
                                    <div className="form-check m-0">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="visibility"
                                            id="public"
                                            value="public"
                                            checked={this.state.visibility === "public"}
                                            onChange={(e) => this.handlePrivacidadeChange(e.target.value)}
                                        />
                                        <label className="form-check-label" htmlFor="public">
                                            <i className="bi bi-globe"></i> Público
                                        </label>
                                    </div>

                                    <div className="form-check m-0">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="visibility"
                                            id="friends"
                                            value="friends"
                                            checked={this.state.visibility === "friends"}
                                            onChange={(e) => this.handlePrivacidadeChange(e.target.value)}
                                        />
                                        <label className="form-check-label" htmlFor="friends">
                                            <i className="bi bi-people-fill"></i> Amigos
                                        </label>
                                    </div>
                                </div>

                                <input
                                    type="text"
                                    className="form-control post-publish"
                                    placeholder="Em que estás a pensar?"
                                    value={this.state.postText || ''}
                                    onChange={(e) => this.handlePostChange(e.target.value)}
                                />
                            </div>
                        </li>

                        <li className="list-group-item d-flex align-items-center">
                            <div className="d-flex w-100 justify-content-between ">
                                <button className="btn btn-white w-100">
                                    <i className="bi bi-camera-video-fill post-icon post-icon-video"></i>Vídeo em direto
                                </button>
                                <button className="btn btn-white w-100">
                                    <i className="bi bi-images post-icon post-icon-foto"></i>Foto/vídeo
                                </button>
                                <button className="btn btn-white w-100">
                                    <i className="bi bi-emoji-smile-fill post-icon post-icon-smile"></i>A
                                    sentir-me/Atividade
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="post">
                    <button className="btn btn-story">
                        <i className="bi bi-plus story-icon" onClick={() => this.publishPost()}></i>
                        <div className="text-content d-flex justify-content-between">
                            <h6>Criar história</h6>
                            <p>Escreva algo</p>
                        </div>
                    </button>
                </div>

                {this.state.posts.map((post, index) => (
                    <div className={`post post-${post.post_id}`} key={post.post_id}>
                        <div className="pub-container">
                            <img src="imagens2/benfica.jpg" className="pub-profile" />

                            <div className="pub-text">
                        <span className="pub-title">
                          Benfica
                          <i className="bi bi-patch-check-fill text-primary custom-icon"></i>
                        </span>
                                <p className="pub-time">1 d •</p>
                            </div>
                        </div>

                        <div className="pub-above-img">
                            <span>{post.content}</span>
                        </div>

                        <div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex align-items-center">
                                    <StrictMode>
                                        <LikesFeat
                                            postId={post.post_id}
                                            refreshTrigger={this.state.refreshLikes[post.post_id]}
                                        />
                                    </StrictMode>
                                    <span className="pub-comentario" style={{"cursor": "pointer"}} onClick={() => this.toogleComentario(post.post_id)}>
                                        <StrictMode>
                                            <CommentsFeat
                                                postId={post.post_id}
                                                refreshTrigger={this.state.refreshComments[post.post_id]}
                                                onlyCount={true}
                                            />
                                        </StrictMode>
                                        &nbsp;comentários  0 partilhas
                                    </span>
                                </li>

                                <li className="list-group-item d-flex align-items-center">
                                    <div className="d-flex w-100 justify-content-between">
                                        <button className="btn btn-pub w-100"
                                                onClick={() => this.handleLikeClick(post.post_id)}>
                                            <i className={`bi ${this.state.likedPosts[post.post_id] ? 'bi-hand-thumbs-up-fill' : 'bi-hand-thumbs-up'} post-icon`}></i>
                                            Gosto
                                        </button>
                                        <button className="btn btn-pub w-100" onClick={() => this.toogleComentario(post.post_id)}>
                                            <i className="bi bi-chat post-icon"></i>
                                            Comentar
                                        </button>
                                        <button className="btn btn-pub w-100">
                                            <i className="bi bi-arrow-90deg-right post-icon"></i>
                                            Partilhar
                                        </button>
                                    </div>
                                </li>
                            </ul>

                            <div className="d-none mt-3 caixa-comentario">
                                <StrictMode>
                                    <CommentsFeat
                                        postId={post.post_id}
                                        refreshTrigger={this.state.refreshComments[post.post_id]}
                                    />
                                </StrictMode>
                                <div className="d-flex align-items-start">
                                    <img src="imagens2/benfica.jpg" alt="Foto de perfil" className="rounded-circle me-2" style={{"width": "36px", "height": "36px", "objectFit": "cover"}}/>

                                    <div className="flex-grow-1 d-flex">
                                        <input
                                            type="text"
                                            className="form-control rounded-pill me-2"
                                            placeholder="Escreve um comentário..."
                                            value={this.state.commentText[post.post_id] || ''}
                                            onChange={(e) => this.handleCommentChange(post.post_id, e.target.value)}
                                        />
                                        <button className="btn btn-grey btn-sm rounded-pill" onClick={() => this.publishComment(post.post_id)}>Publicar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default MiddleSide