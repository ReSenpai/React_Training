import React from 'react';
import style from './InputMessage.module.css';

const InputMessage = (props) => {

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        newMessageElement.current.value = '';
        props.sendMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    let pressEnter = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    }

    return (
        <div className={ style.textarea__wrapper }>
            <div>
                <textarea
                    className={ style.textarea }
                    ref={ newMessageElement } 
                    value={ props.newMessageText }
                    onChange={ onMessageChange }
                    onKeyPress={ pressEnter }
                    ></textarea>
            </div>
            <div>
                <button onClick={ sendMessage }>Send</button>
            </div>
        </div>
    )
}

export default InputMessage;