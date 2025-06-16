import React from 'react';

class LikesFeat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/likes/posts/'+this.props.postId)
            .then(res => res.json())
            .then(data => {
                this.setState({ likes: data });
            })
            .catch(err => console.log('Erro: ' + err));
    }

    render() {
        return (
            <span className="pub-comentario2">
                {this.state.likes.length} likes
            </span>
        );
    }
}

export default LikesFeat;