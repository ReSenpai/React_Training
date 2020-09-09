import { AppStateType } from "./redux_store";


export const getUserId = (state: AppStateType) => {
    return state.auth.userId;
}

export const getIsAuth = (state: AppStateType) => {
    return state.auth.isAuth;
}

export const getCaptcha = (state: AppStateType) => {
    return state.auth.captcha;
}

export const getLogin = (state: AppStateType) => {
    return state.auth.login;
}