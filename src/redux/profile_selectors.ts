import { createSelector } from "reselect";
import { AppStateType } from "./redux_store";

export const getProfile = (state: AppStateType) => {
    return state.profilePage.profile;
}

export const getStatus = (state: AppStateType) => {
    return state.profilePage.status;
}

export const getPosts = (state: AppStateType) => {
    return state.profilePage.posts;
}

