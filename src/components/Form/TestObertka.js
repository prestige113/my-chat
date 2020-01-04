import React from 'react'
import MessageList from "./MessageList";
import TextArea from "./TextArea";

export default class Obertka extends React.Component {
    render() {
        return (<div className="chat-window">
            <MessageList messages={[]}/>
            <TextArea value={this.props.value} onChange={this.props.onChangeText}
                      onClickButton={this.props.onClickButton}/>
        </div>)
    }
}