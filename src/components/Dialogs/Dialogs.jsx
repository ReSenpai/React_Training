import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import InputMessage from './inputMessage/InputMessage';

const Dialogs = (props) => {

    let dialogElements = props.dialogs
        .map((dialog, i) => <DialogItem
            key={ i }
            name={ dialog.name }
            id={ dialog.id }
            avatar={ dialog.avatar } />
        );

    let messagesElement = props.messages
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
                    newMessageText={ props.newMessageText }
                    sendMessage={ props.sendMessage }
                    updateNewMessageText={ props.updateNewMessageText } />
            </div>
        </div>
    );
}

export default Dialogs;