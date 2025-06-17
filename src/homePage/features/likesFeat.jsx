import React from 'react';

class LikesFeat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likeCount: 0
        };
    }

    componentDidMount() {
        this.loadLikes();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.refreshTrigger !== this.props.refreshTrigger) {
            this.loadLikes();
        }
    }

    loadLikes = () => {
        fetch(`http://localhost:3000/likes/posts/${this.props.postId}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ likeCount: data.length }); // ou ajuste conforme sua API
            })
            .catch(err => console.log("Erro ao carregar likes:", err));
    }

    render() {
        return (
            <span className="me-2">
                <i className="bi bi-hand-thumbs-up me-1"></i>
                {this.state.likeCount}
            </span>
        );
    }
}

export default LikesFeat;
