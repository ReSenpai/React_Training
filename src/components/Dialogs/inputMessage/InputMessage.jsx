import React from 'react';
import style from './InputMessage.module.css';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/state';


const InputMessage = (props) => {

    let newMessageElement = React.createRef();

    let onSendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    let onMessageChange = (event) => {
        let text = newMessageElement.current.value;
        console.log(text);
        console.log(event.target.vaule);
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    let pressEnter = (event) => {
        if (event.key === 'Enter') {
            onSendMessage();
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
                <button onClick={ onSendMessage }>Send</button>
            </div>
        </div>
    )
}

export default InputMessage;