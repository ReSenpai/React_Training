import { authAPI } from "../api/api";
import { FORM_ERROR } from 'final-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_CAPTCHA = 'auth/SET_CAPTCHA';

let initialState = {
    userId: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false as boolean,
    isFetching: true as boolean,
    captcha: null as null | string
};
export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {

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

type SetAuthUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: SetAuthUserDataActionPayloadType
}
export const setAuthUserData = ( userId: number | null, email: string | null, login: string | null, isAuth: boolean )
: SetAuthUserDataActionType => ({ 
    type: SET_USER_DATA, 
    payload: { userId, email, login, isAuth } 
});

type SetCaptchaActionType = {
    type: typeof SET_CAPTCHA
    captcha: string
}
export const setCaptcha = (captcha: string): SetCaptchaActionType => ({ type: SET_CAPTCHA, captcha});

export const getAuthUserData = () => async (dispatch: any) => {
    const response = await authAPI.authMe();

    if (response. data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const getCaptcha = () => async (dispatch: any) => {
    const url = await authAPI.getCaptcha()
    dispatch(setCaptcha(url));
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
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

export const logout = () => async (dispatch: any) => {
    const data = await authAPI.logout();

    data.resultCode === 0 
    ? dispatch(setAuthUserData(null, null, null, false))
    : console.log(...data.messages)
}



export default authReducer;