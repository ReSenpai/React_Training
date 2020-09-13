import { authAPI, ResultCodesEnum, ResultCodeForCaptcha } from "../api/api";
import { FORM_ERROR } from 'final-form';
import { AppStateType } from "./redux_store";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

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

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

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

type ActionsTypes = SetAuthUserDataActionType | SetCaptchaActionType;

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
export const setAuthUserData = ( 
    userId: number | null, email: string | null, login: string | null, isAuth: boolean 
): SetAuthUserDataActionType => ({ 
    type: SET_USER_DATA, 
    payload: { userId, email, login, isAuth } 
});

type SetCaptchaActionType = {
    type: typeof SET_CAPTCHA
    captcha: string
}
export const setCaptcha = (captcha: string): SetCaptchaActionType => ({ type: SET_CAPTCHA, captcha});


type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;


export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const response = await authAPI.authMe();
    if (response.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const getCaptcha = (): ThunkType => async (dispatch) => {
    const url = await authAPI.getCaptcha()
    dispatch(setCaptcha(url));
}

export type LoginDataType = {
    email: string 
    password: string
    rememberMe: boolean
    captcha: string | null
}
export const login = (
    loginData: LoginDataType
): ThunkAction<Promise<any>, AppStateType, unknown, ActionsTypes> => async (dispatch) => {
    const data = await authAPI.login(loginData);
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
    } else {
        data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired && dispatch(getCaptcha());
        const error = data.messages.length > 0
        ? data.messages[0]
        : 'Some error'
        return { [FORM_ERROR]: error}
    }
}

export const logout = (): ThunkType => async (dispatch) => {
    const data = await authAPI.logout();

    data.resultCode === 0 
    ? dispatch(setAuthUserData(null, null, null, false))
    : console.log(...data.messages)
}



export default authReducer;