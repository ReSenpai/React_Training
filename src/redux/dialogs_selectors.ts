import { AppStateType } from "./redux_store";

export const getDialogs = (state: AppStateType) => {
    return state.dialogsPage.dialogs;
}

export const getMessages = (state: AppStateType) => {
    return state.dialogsPage.messages;
}