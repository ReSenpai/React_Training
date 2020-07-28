import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs_reducer';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer> 
            {
                (store) => {
                    let state = store.getState().dialogsPage;

                    let onSendMessage = () => {
                        store.dispatch(sendMessageActionCreator())
                    }


                    let onMessageChange = (text) => {
                        store.dispatch(updateNewMessageTextActionCreator(text))
                    }
                    return <Dialogs 
                            state={ state }
                            sendMessage={ onSendMessage }
                            messageChange={ onMessageChange } />
                }
            }

        </StoreContext.Consumer>
    );
}

export default DialogsContainer;