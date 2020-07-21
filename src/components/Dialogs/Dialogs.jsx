import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import InputMessage from './inputMessage/InputMessage';

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
            message={ message.message } />
        );

    return (
        <div className={ style.dialogs }>
            <div className={ style.dialogs__item }>
                { dialogElements }
            </div>
            <div>
                <div className={ style.messages }>
                    { messagesElement }
                </div>
                <InputMessage
                    sendMessage={ props.sendMessage }
                    updateNewMessageText={ props.updateNewMessageText }
                    newMessageText= { props.newMessageText } />
            </div>
        </div>
    );
}

export default Dialogs;