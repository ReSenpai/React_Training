import { headerAPI, authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }  
}

export const setAuthUserData= (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: {
    userId, email, login, isAuth
} })

export const getAuthUserData = () => (dispatch) => {
    headerAPI.authMe()
    .then(data => {
        let {id, email, login} = data.data;
        data.resultCode === 0
        ? dispatch(setAuthUserData(id, email, login, true))
        : console.log(...data.messages)
    });
}

export const login = ({email, password, rememberMe}) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
    .then(data => {
        data.resultCode === 0 
        ? dispatch(getAuthUserData())
        : console.log(...data.messages)
    });
}

export const logout = () => (dispatch) => {
    authAPI.logout()
    .then(data => {
        data.resultCode === 0 
        ? dispatch(setAuthUserData(null, null, null, false))
        : console.log(...data.messages)
    });
}

export default authReducer;