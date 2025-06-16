import React from 'react';

class CommentsFeat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/comments/posts/'+this.props.postId)
            .then(res => res.json())
            .then(data => {
                this.setState({ comments: data });
            })
            .catch(err => console.log('Erro: ' + err));
    }

    render() {
        return (
            this.state.comments.length
        );
    }
}

export default CommentsFeat;