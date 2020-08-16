import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Form, Field } from 'react-final-form'

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

    let onSendMessage = (values) => {
        props.sendMessage(values.newMessageBody);
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
                    <AddMessageForm onSubmit={ onSendMessage } />
                </div>
            </div>
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <Form
            onSubmit={ props.onSubmit }
            render={({ handleSubmit }) => (
                <form onSubmit={ handleSubmit }>
                   <div>
                        <Field 
                            component='textarea'
                            name='newMessageBody'
                            placeholder='Message...'
                        />
                    </div>
                    <div>
                        <button>Send</button>
                    </div>
                </form>
            )}
        />
    )
}

export default Dialogs;