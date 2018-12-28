import React, { Component } from 'react';
import MessageMe from '../MessageMe'
import MessageOther from '../MessageOther'
import { data } from '../../views/home/fakeData';

import { commentData } from './fakeData'
class CommentSection extends Component {
    state = {
        item: null,
        comments: null,
        input: ''
    }
    componentDidMount () {
        this.setState({comments: commentData})
    }

    renderComments = () => {
        let comments = []
        this.state.comments.map(comment => {
            if(comment.youSend) {
                comments.push(<MessageMe comment={comment}/>)
            } else {
                comments.push(<MessageOther comment={comment}/>)
            }
        })
        return comments;
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleAddComment(e.target.value)
        } else {
            this.setState({input:e.target.value})
        }
    }

    handleAddComment = (comment) => {
        let newComment = {
            name: 'You',
            message: comment,
            time: 'Now',
            youSend: true
        }
        let oldComments = this.state.comments;
        oldComments.unshift(newComment)

        this.setState({
            comments: oldComments,
            input: ''
        })

        document.getElementById('comment').value = ''
    }

    render () {
        return (
            this.state.comments ?
                <div className="comment-wrapper">
                    <div className="comment-conversation-wrapper">
                        {this.renderComments()}
                    </div>
                    <input id="comment" defaultValue={this.state.input} onKeyUp={(e) => this.handleKeyPress(e)} type="text" placeholder="Vas komentar..."/> <br />
                    <button onClick={() => this.handleAddComment(this.state.input)} type="button" > Komentarisi </button>
                </div>
            : null
        )
    }
}

export default CommentSection;
