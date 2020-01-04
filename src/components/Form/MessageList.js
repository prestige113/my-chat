import React from 'react'
import MessageItem from "./MessageItem";

export default class MessageList extends React.Component {

    render() {
        const {messages} = this.props;
        return (
            <div className="messages">
                {messages && messages.map(message =>
                    <MessageItem key={message.id} message={message}/>
                )}
                {messages.length === 0 &&
                <div className="message-empty-box">
                    <span>no messages...</span>
                </div>
                }
            </div>
        )
    }
}