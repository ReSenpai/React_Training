import React from 'react';
import Dialogs from './Dialogs';
import { 
    sendMessage, 
    updateNewMessageText 
} from '../../redux/dialogs_reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
    }  
}

export default compose(
    connect(mapStateToProps, {
        messageChange: updateNewMessageText,
        sendMessage:sendMessage
    }),
    withAuthRedirect
)(Dialogs);