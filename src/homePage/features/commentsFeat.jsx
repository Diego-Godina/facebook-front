import React from 'react';
import { jwtDecode } from "jwt-decode";

class CommentsFeat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            likedComments: {}
        };
    }

    componentDidMount() {
        this.loadComments();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.refreshTrigger !== this.props.refreshTrigger) {
            this.loadComments();
        }
    }

    loadComments() {
        const token = localStorage.getItem('token');
        const userId = token ? jwtDecode(token).userId : null;

        fetch(`http://localhost:3000/comments/posts/${this.props.postId}`)
            .then(res => res.json())
            .then(comments => {
                this.setState({ comments });

                if (!token || !userId) return;

                const likeFetches = comments.map(comment =>
                    fetch(`http://localhost:3000/likes/comments/${comment.comment_id}`, {
                        headers: {
                            'Authorization': 'Bearer ' + token
                        }
                    })
                        .then(res => res.json())
                        .then(likes => ({
                            commentId: comment.comment_id,
                            liked: likes.some(like => like.user_id === userId)
                        }))
                );

                Promise.all(likeFetches)
                    .then(results => {
                        const likedComments = {};
                        results.forEach(({ commentId, liked }) => {
                            likedComments[commentId] = liked;
                        });
                        this.setState({ likedComments });
                    });
            })
            .catch(err => console.log('Erro ao buscar comentários: ' + err));
    }

    handleLikeComment(commentId) {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Você precisa estar autenticado para curtir comentários.');
            return;
        }

        const alreadyLiked = this.state.likedComments[commentId];

        if (alreadyLiked) {
            fetch(`http://localhost:3000/likes/comments/${commentId}`, {
                method: 'DELETE'
            })
                .then(res => {
                    if (!res.ok) throw new Error("Erro ao remover like do comentário");
                    this.setState(prev => ({
                        likedComments: {
                            ...prev.likedComments,
                            [commentId]: false
                        }
                    }));
                })
                .catch(err => console.log("Erro ao remover like do comentário:", err));
        } else {
            fetch(`http://localhost:3000/likes/comments/${commentId}/likes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({ like_type: 'like' })
            })
                .then(res => {
                    if (!res.ok) throw new Error("Erro ao curtir comentário");
                    this.setState(prev => ({
                        likedComments: {
                            ...prev.likedComments,
                            [commentId]: true
                        }
                    }));
                })
                .catch(err => console.log("Erro ao curtir comentário:", err));
        }
    }

    render() {
        if (this.props.onlyCount) {
            return <span>{this.state.comments.length}</span>;
        }

        return (
            <div className="mt-2">
                {this.state.comments.map(comment => (
                    <div key={comment.comment_id} className="d-flex align-items-start mb-2">
                        <img
                            src="imagens2/benfica.jpg"
                            alt="Foto"
                            className="rounded-circle me-2"
                            style={{ width: "32px", height: "32px", objectFit: "cover" }}
                        />
                        <div className="flex-grow-1 bg-light rounded px-3 py-2">
                            <p className="mb-1">{comment.content}</p>
                            <button
                                className="btn btn-link btn-sm p-0"
                                onClick={() => this.handleLikeComment(comment.comment_id)}
                            >
                                <i className={`bi ${this.state.likedComments[comment.comment_id] ? 'bi-hand-thumbs-up-fill' : 'bi-hand-thumbs-up'} me-1`}></i>
                                Gosto
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default CommentsFeat;
