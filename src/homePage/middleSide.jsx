import React, {StrictMode} from 'react'
import { jwtDecode } from "jwt-decode";
import LikesFeat from "./features/likesFeat.jsx"
import CommentsFeat from "./features/commentsFeat.jsx"

class MiddleSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            likedPosts: {}
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token');

        if(!token) {
            console.error("Token não encontrado");
            return;
        }

        try {
            const decoded = jwtDecode(token);
            const userId = decoded.userId;

            if (!userId) {
                console.error('ID do usuário não encontrado no token decodificado.');
                return;
            }

            fetch(`http://localhost:3000/posts/users/${userId}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({ posts: data });
                })
                .catch(err => console.log('Erro ao buscar posts: ' + err));
        } catch (error) {
            console.error('Erro ao decodificar o token:', error);
        }
    }

    handleLikeClick = (postId) => {
        const token = localStorage.getItem('token');
        const liked = this.state.likedPosts[postId];

        if (!token) {
            alert('Você precisa estar autenticado para curtir posts.');
            return;
        }

        if (liked) {
            fetch(`http://localhost:3000/likes/1/post/`+postId, {
                method: 'DELETE',
            }).then(() => {
                this.setState(prevState => ({
                    likedPosts: { ...prevState.likedPosts, [postId]: false }
                }));
            }).catch(err => console.log("Erro ao remover like:", err));
        } else {
            fetch(`http://localhost:3000/likes/posts/`+postId+`/likes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({ like_type: 'like' })
            }).then(res => {
                if (!res.ok) throw new Error('Erro ao curtir');
                return res.json();
            }).then(() => {
                this.setState(prevState => ({
                    likedPosts: { ...prevState.likedPosts, [postId]: true }
                }));
            }).catch(err => console.log("Erro ao dar like:", err));
        }
    };

    toogleComentario = (postId) => {
        const caixa = document.querySelector(`.post-${postId} .caixa-comentario`);
        if (caixa) {
            caixa.classList.toggle("d-none");
        }
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
                                        <input className="form-check-input" type="radio" name="privacidade" id="publico"
                                               value="publico" defaultChecked/>
                                        <label className="form-check-label" htmlFor="publico">
                                            <i className="bi bi-globe"></i> Público
                                        </label>
                                    </div>

                                    <div className="form-check m-0">
                                        <input className="form-check-input" type="radio" name="privacidade" id="amigos"
                                               value="amigos"/>
                                        <label className="form-check-label" htmlFor="amigos">
                                            <i className="bi bi-people-fill"></i> Amigos
                                        </label>
                                    </div>
                                </div>

                                <input type="text" className="form-control post-publish"
                                       placeholder="Em que estás a pensar?"/>
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

                {this.state.posts.length === 0 && (
                    <div className="post">
                        <button className="btn btn-story">
                            <i className="bi bi-plus story-icon"></i>
                            <div className="text-content d-flex justify-content-between">
                                <h6>Criar história</h6>
                                <p>Partilha uma foto ou escreve algo</p>
                            </div>
                        </button>
                    </div>
                )}

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
                                        <LikesFeat postId={post.post_id}/>
                                    </StrictMode>
                                    <span className="pub-comentario" style={{'paddingLeft': '150px'}}>
                                        <StrictMode>
                                            <CommentsFeat postId={post.post_id}/>
                                        </StrictMode>
                                        &nbsp;comentários  3,4 mil partilhas
                                    </span>
                                </li>

                                <li className="list-group-item d-flex align-items-center">
                                    <div className="d-flex w-100 justify-content-between ">
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
                                <div className="d-flex align-items-start">
                                    <img src="imagens2/benfica.jpg" alt="Foto de perfil" className="rounded-circle me-2" style={{"width": "36px", "height": "36px", "objectFit": "cover"}}/>

                                    <div className="flex-grow-1 d-flex">
                                        <input type="text" className="form-control rounded-pill me-2"
                                               placeholder="Escreve um comentário..."/>
                                        <button className="btn btn-grey btn-sm rounded-pill">Publicar</button>
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