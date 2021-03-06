import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Form, Field } from 'react-final-form'
import { Textarea } from '../common/FormsControls/FormsControls';
import { composeValidators, requiredField, maxLengthCreator } from '../../utils/validators/validators';
import { DialogType, MessageType } from '../../types/types';

type PropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    sendMessage: (newMessageBody: string) => void
}

type Value = {
    newMessageBody: string
}

const Dialogs: React.FC<PropsType> = ({dialogs, messages, sendMessage}) => {

    let dialogElements = dialogs
        .map((dialog, i) => <DialogItem
            key={ i }
            name={ dialog.name }
            id={ dialog.id }
            avatar={ dialog.avatar } />
    );

    let messagesElement = messages
        .map((message, i) => <Message
            key={ i }
            message={ message.message }
            type={ message.type } />
    );

    let onSendMessage = (values: Value) => {
        sendMessage(values.newMessageBody);
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

type PropsFormType = {
    onSubmit: (values: Value) => void
}

const AddMessageForm: React.FC<PropsFormType> = (props) => {
    return (
        <Form
            onSubmit={ props.onSubmit }
            render={({ handleSubmit }) => (
                <form onSubmit={ handleSubmit }>
                   <div>
                        <Field 
                            component={ Textarea }
                            name='newMessageBody'
                            placeholder='Message...'
                            validate={composeValidators(requiredField, maxLengthCreator(100))}
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