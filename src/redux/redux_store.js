import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import thunkMiddleware from 'redux-thunk';
import newsReducer from "./news_reducer";

let reducersPack = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    newsPage: newsReducer
});

let store = createStore(reducersPack, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;