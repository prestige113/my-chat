import React from 'react'

export default class TextArea extends React.Component {
    onChange = (event) => {
        console.log(event.target.value, "onchange");
        this.props.onChange(event.target.value)
    };

    render() {
        return (
            <div className="text-area">
                    <textarea className="send-message" value={this.props.value} placeholder="Введите сообщение"
                              onChange={this.onChange}/>
                <div className="send-button">
                    <button className="button" type="button" onClick={this.props.onClickButton}>Отправить</button>
                </div>
            </div>
        )
    }
}