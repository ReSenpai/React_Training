import { headerAPI, authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_ID = 'SET_USER_ID';

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
                ...action.data,
                isAuth: true
            }
        }
        case SET_USER_ID: {
            return {
                ...state,
                userId: action.userId
            }
        }
        default:
            return state;
    }  
}

export const setAuthUserData= (userId, email, login) => ({ type: SET_USER_DATA, data: {
    userId, email, login
} })
export const setAuthUserId= (userId,) => ({ type: SET_USER_ID, userId })

export const getAuthUserData = () => (dispatch) => {
    headerAPI.authMe()
    .then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login));
        }
    });
}

export const getAuthorization = (data) => (dispatch) => {
    let {email, password, rememberMe} = data;
    authAPI.getAuthorization(email, password, rememberMe)
    .then(userId => {
        dispatch(setAuthUserId(userId));
    })
}

export default authReducer;