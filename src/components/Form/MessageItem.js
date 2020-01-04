import React from 'react'

export default class MessageItem extends React.Component {

    render() {
        const {message} = this.props;
        return (
            <div>
                <span>{message.id}:</span> <span> {message.text}</span>
            </div>
        )
    }

}