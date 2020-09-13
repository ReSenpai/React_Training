import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { profileAPI } from "../api/api";
import { PostType, ProfileType, PhotosType } from "../types/types";
import { AppStateType } from "./redux_store";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';


let initialState = {
    posts: [
        { id: 1, nickname: 'Katerina', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo veritatis, corrupti assumenda quidem impedit delectus facere in neque nulla, odio quibusdam, reprehenderit quaerat expedita quod cum iure ipsum provident laborum.', avatar: 'https://www.vranimesociety.com/assets/logo-ca820fd22dfa0d8709ba05792671557237691b242eaa87ddc8e5438fe8c72fdc.webp', like: 0 },
        { id: 2, nickname: 'Elza', text: 'I don\'t no', avatar: 'https://data.whicdn.com/images/333477434/original.jpg', like: 10 },
        { id: 3, nickname: 'Bot9000', text: 'Whyyyyyyyyyyyyyyyyyyyyy?', avatar: 'https://i.pinimg.com/736x/f8/8f/31/f88f31f29fb6e42b8c387743405166b7.jpg', like: 5 },
        { id: 4, nickname: 'Human', text: 'Why not :)', avatar: 'https://pbs.twimg.com/profile_images/1082020318523412480/E87sUSUc_400x400.jpg', like: 1 },
        { id: 5, nickname: 'Solo', text: 'Olivia', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTB1XNd7zac9ZAJs3LHlgHbGdhVsjyohiqHQ&usqp=CAU', like: 4 }
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '' as string
};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case ADD_POST: {
            let text = action.newPostText;
            let newPost = {
                id: state.posts.length + 1,
                nickname: 'Re Senpai',
                text: text,
                avatar: 'https://pbs.twimg.com/profile_images/890664645740175360/ATnwBuw_.jpg',
                like: 0
            }
            return {
                ...state,
                posts: [newPost, ...state.posts]
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(post => post.id != action.postId)
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                } as ProfileType
            }
        }
        default:
            return state;
    }
}

type ActionsTypes = AddPostActionType | DeletePostActionType | SetUserProfileActionType |
    SetStatusActionType | SavePhotoSuccessType;

export type AddPostActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPost = (newPostText: string): AddPostActionType => ({ type: ADD_POST, newPostText });
type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({ type: DELETE_POST, postId });
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile });
type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status });
type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({ type: SAVE_PHOTO_SUCCESS, photos });


type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;


export const getUserProfile = (userId: number | null): ThunkType => async (dispatch) => {    
    const data = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(data)); 
}

export const getUserStatus = (userId: number): ThunkType => async (dispatch) => {    
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateUserStatus = (status: string): ThunkType => async (dispatch) => {    
    const response = await profileAPI.updateStatus(status);
    if(response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file: string): ThunkType => async (dispatch) => {    
    const response = await profileAPI.savePhoto(file);
    if(response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos));
    }
}

export const updateProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId;    
    const response = await profileAPI.updateProfile(profile);
    if(response.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        const error = response.messages.length > 0
        ? response.messages[0]
        : 'Some error'
        return error;
    }
}


export default profileReducer;