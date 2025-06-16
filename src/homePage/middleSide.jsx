import React, {StrictMode} from 'react'
import LeftSide from "../friendsPage/leftSide.jsx";
import RightSide from "../friendsPage/rightSide.jsx";
import LikesFeat from "./features/likesFeat.jsx";
import CommentsFeat from "./features/commentsFeat.jsx";

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

        fetch('http://localhost:3000/posts/users/1')
            .then(res => res.json())
            .then(data => {
                this.setState({posts: data});
            })
            .catch(err => console.log('Erro: ' + err));
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

    render() {
        return (
            <div className="middle">
                <div className="post">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex align-items-center ">
                            <img src="imagens2/benfica.jpg" alt="Foto de perfil" className="post-pics"/>
                            <div className="form-control d-flex align-items-center post-publish" role="button" >
                                Em que estás a pensar?
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
                                    <i className="bi bi-emoji-smile-fill post-icon post-icon-smile"></i>A sentir-me/Atividade
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
                    <div className="post">
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
                                    <span className="pub-comentario">
                                        <StrictMode>
                                            <CommentsFeat postId={post.post_id}/>
                                        </StrictMode>
                                        &nbsp;comentários  3,4 mil partilhas
                                    </span>
                                </li>

                                <li className="list-group-item d-flex align-items-center">
                                    <div className="d-flex w-100 justify-content-between ">
                                        <button className="btn btn-pub w-100" onClick={() => this.handleLikeClick(post.post_id)}>
                                            <i className={`bi ${this.state.likedPosts[post.post_id] ? 'bi-hand-thumbs-up-fill' : 'bi-hand-thumbs-up'} post-icon`}></i>
                                            Gosto
                                        </button>
                                        <button className="btn btn-pub w-100">
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
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default MiddleSide