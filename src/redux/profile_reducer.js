import { profileAPI } from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';

let initialState = {
    posts: [
        { id: 1, nickname: 'Katerina', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo veritatis, corrupti assumenda quidem impedit delectus facere in neque nulla, odio quibusdam, reprehenderit quaerat expedita quod cum iure ipsum provident laborum.', avatar: 'https://www.vranimesociety.com/assets/logo-ca820fd22dfa0d8709ba05792671557237691b242eaa87ddc8e5438fe8c72fdc.webp', like: 0 },
        { id: 2, nickname: 'Elza', text: 'I don\'t no', avatar: 'https://data.whicdn.com/images/333477434/original.jpg', like: 10 },
        { id: 3, nickname: 'Bot9000', text: 'Whyyyyyyyyyyyyyyyyyyyyy?', avatar: 'https://i.pinimg.com/736x/f8/8f/31/f88f31f29fb6e42b8c387743405166b7.jpg', like: 5 },
        { id: 4, nickname: 'Human', text: 'Why not :)', avatar: 'https://pbs.twimg.com/profile_images/1082020318523412480/E87sUSUc_400x400.jpg', like: 1 },
        { id: 5, nickname: 'Solo', text: 'Olivia', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTB1XNd7zac9ZAJs3LHlgHbGdhVsjyohiqHQ&usqp=CAU', like: 4 }
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

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
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => async (dispatch) => {    
    const data = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(data)); 
}

export const getUserStatus = (userId) => async (dispatch) => {    
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateUserStatus = (status) => async (dispatch) => {    
    const response = await profileAPI.updateStatus(status);
    if(response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;