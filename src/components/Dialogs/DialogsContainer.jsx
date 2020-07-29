import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs_reducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
    }  
}

const mapDispatchToProps = (dispatch) => {
    return {
        messageChange: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;