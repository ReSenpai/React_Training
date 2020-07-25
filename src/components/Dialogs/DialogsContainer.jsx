import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs_reducer';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }


    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <Dialogs 
        state={ state }
        sendMessage={ onSendMessage }
        messageChange={ onMessageChange } />
    );
}

export default DialogsContainer;