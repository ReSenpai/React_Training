import { headerAPI, authAPI } from "../api/api";
import { FORM_ERROR } from 'final-form'

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true,
    captcha: null
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        case SET_CAPTCHA: {
            return {
                ...state,
                captcha: action.captcha
            }
        }
        default:
            return state;
    }  
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: {
    userId, email, login, isAuth
} })
export const setCaptcha = (captcha) => ({ type: SET_CAPTCHA, captcha})

export const getAuthUserData = () => (dispatch) => {
    headerAPI.authMe()
    .then(data => {
        let {id, email, login} = data.data;
        data.resultCode === 0
        ? dispatch(setAuthUserData(id, email, login, true))
        : console.log(...data.messages)
    });
}

export const getCaptcha = () => (dispatch) => {
    authAPI.getCaptcha()
    .then(url => {
        dispatch(setCaptcha(url));
    });
}

export const login = ({email, password, rememberMe, captcha}) => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        data.resultCode === 10 && dispatch(getCaptcha());
        const error = data.messages.length > 0
        ? data.messages[0]
        : 'Some error'
        return { [FORM_ERROR]: error}
    }
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