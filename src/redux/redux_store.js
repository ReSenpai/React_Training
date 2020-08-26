import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import thunkMiddleware from 'redux-thunk';
import newsReducer from "./news_reducer";
import appReducer from "./app_reducer";

let reducersPack = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    newsPage: newsReducer,
    app: appReducer
});
/**
 * Develop tool helper.
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducersPack, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

export default store;