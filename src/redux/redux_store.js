import { createStore, combineReducers } from "redux";
import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";

let reducersPack = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducersPack);

window.store = store;

export default store;