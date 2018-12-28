import React, { Component } from 'react';

class MessageOther extends Component {
    render () {
        return (
            <div className="message-wrapper">
                <div className="message-wrapper-image">{this.props.comment.name}</div>
                <div className="message-wrapper-text"> {this.props.comment.message} <br /> <span className="message-wrapper-time">{this.props.comment.time}</span></div>
            </div>
        )
    }
}

export default MessageOther;