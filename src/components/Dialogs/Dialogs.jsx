import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs
        .map((dialog, i) => <DialogItem
            key={ i }
            name={ dialog.name }
            id={ dialog.id }
            avatar={ dialog.avatar } />
    );

    let messagesElement = props.state.messages
        .map((message, i) => <Message
            key={ i }
            message={ message.message }
            type={ message.type } />
    );

    let newMessageElement = React.createRef();

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.messageChange(text);
    }

    let pressEnter = (event) => {
        if (event.key === 'Enter') {
            onSendMessage();
        }
    } 

    return (
        <div className={ style.dialogs }>
            <div className={ style.dialogs__item }>
                { dialogElements }
            </div>
            <div>
                <div className={ style.messages }>
                    { messagesElement }
                </div>
                <div className={ style.textarea__wrapper }>
                    <div>
                        <textarea
                            className={ style.textarea }
                            ref={ newMessageElement } 
                            value={ props.state.newMessageText }
                            onChange={ onMessageChange }
                            onKeyPress={ pressEnter }
                            ></textarea>
                    </div>
                    <div>
                        <button onClick={ onSendMessage }>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;