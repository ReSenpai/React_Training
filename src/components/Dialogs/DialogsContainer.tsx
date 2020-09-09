import React from 'react';
import Dialogs from './Dialogs';
import { 
    sendMessage
} from '../../redux/dialogs_reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getDialogs, getMessages } from '../../redux/dialogs_selectors';
import { DialogType, MessageType } from '../../types/types';
import { AppStateType } from '../../redux/redux_store';

type MapStatePropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type MapDispatchPropsType = {
    sendMessage: (newMessageBody: string) => void
}

type OwnPropsType = {
// directly abandoned props
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: getDialogs(state),
        messages: getMessages(state)
    }  
}

const mapDispatchToProps = (dispatch: any): MapDispatchPropsType => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessage(newMessageBody));
        }
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);