import { createStore, combineReducers } from "redux";
import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';

let reducersPack = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

let store = createStore(reducersPack);

export default store;