import React, { Component } from 'react';

class MessageMe extends Component {
    render () {
        return (
            <div className="message-wrapper">
                <div className="message-wrapper-image image-me"> You</div>
                <div className="message-wrapper-text text-me"> {this.props.comment.message} <br /> <span className="message-wrapper-time">{this.props.comment.time}</span></div>
            </div>
        )
    }
}

export default MessageMe;