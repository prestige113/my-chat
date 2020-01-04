import React from 'react'
import './Container.css'
import MessageList from "./MessageList"
import TextArea from "./TextArea"
import SockJS from 'sockjs-client'
import Stomp from 'react-stomp'

export default class MainContainer extends React.Component {
    state = {
        text: "",
        messages: [],
        connect: false,
        stompClient: null
    };


    componentDidMount() {
        this.connect()
    }


    connect = () => {
        const socket = new SockJS('/gs-guide-websocket');
        let {stompClient} = this.state;
        stompClient = Stomp.over(socket);
        stompClient.connect({}, (frame) => {
            stompClient.subscribe('/topic/greetings', function (greeting) {
                //showGreeting(JSON.parse(greeting.body).content);
            });
        });
        this.setState({stompClient: stompClient})
    };
    onChangeText = (value) => {
        this.setState({
            text: value
        })

    };
    onClickButton = () => {
        const {text, messages} = this.state;
        if (text != "") {
            const message = {
                text: text,
                id: (messages.length + 1)
            };
            this.setState({
                text: "",
            });
            messages.push(message);
            console.log(this.state)
        }
    };

    render() {
        const {text, messages} = this.state;
        console.log(text, "value");
        return (
            <div className="wrapper-form">
                <div className="content-form">
                    <div className="list-channels">
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </div>
                    <div className="chat-window">
                        <MessageList messages={messages}/>
                        <TextArea value={text} onChange={this.onChangeText}
                                  onClickButton={this.onClickButton}/>
                    </div>
                </div>
            </div>
        )
    }
}