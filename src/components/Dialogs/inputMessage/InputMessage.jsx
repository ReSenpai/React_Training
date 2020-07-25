import React from 'react';
import style from './InputMessage.module.css';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/dialogs_reducer';


const InputMessage = (props) => {

    let newMessageElement = React.createRef();

    let onSendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    let onMessageChange = (event) => {
        let text = event.target.value;
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