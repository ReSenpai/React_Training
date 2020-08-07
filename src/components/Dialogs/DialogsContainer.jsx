import React from 'react';
import Dialogs from './Dialogs';
import { 
    sendMessage, 
    updateNewMessageText 
} from '../../redux/dialogs_reducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
        isAuth: state.auth.isAuth
    }  
}

const DialogsContainer = connect(mapStateToProps, {
    messageChange: updateNewMessageText,
    sendMessage:sendMessage
})(Dialogs);

export default DialogsContainer;