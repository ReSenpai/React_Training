import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: 1, nickname: 'Katerina', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo veritatis, corrupti assumenda quidem impedit delectus facere in neque nulla, odio quibusdam, reprehenderit quaerat expedita quod cum iure ipsum provident laborum.', avatar: 'https://www.vranimesociety.com/assets/logo-ca820fd22dfa0d8709ba05792671557237691b242eaa87ddc8e5438fe8c72fdc.webp', like: 0 },
        { id: 2, nickname: 'Elza', text: 'I don\'t no', avatar: 'https://data.whicdn.com/images/333477434/original.jpg', like: 10 },
        { id: 3, nickname: 'Bot9000', text: 'Whyyyyyyyyyyyyyyyyyyyyy?', avatar: 'https://i.pinimg.com/736x/f8/8f/31/f88f31f29fb6e42b8c387743405166b7.jpg', like: 5 },
        { id: 4, nickname: 'Human', text: 'Why not :)', avatar: 'https://pbs.twimg.com/profile_images/1082020318523412480/E87sUSUc_400x400.jpg', like: 1 },
        { id: 5, nickname: 'Solo', text: 'Olivia', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTB1XNd7zac9ZAJs3LHlgHbGdhVsjyohiqHQ&usqp=CAU', like: 4 }
    ],
    newPostText: '',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let text = state.newPostText;
            if (text.trim().length > 0) {
                let newPost = {
                    id: state.posts.length + 1,
                    nickname: 'Re Senpai',
                    text: text,
                    avatar: 'https://pbs.twimg.com/profile_images/890664645740175360/ATnwBuw_.jpg',
                    like: 0
                }
                return {
                    ...state,
                    newPostText: '',
                    posts: [newPost, ...state.posts]
                }
            } else {
                return {
                    ...state,
                    newPostText: ''
                }
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
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

export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => (dispatch) => {    
    profileAPI.getUserProfile(userId)
    .then(data => dispatch(setUserProfile(data))); 
}

export const getUserStatus = (userId) => (dispatch) => {    
    profileAPI.getStatus(userId)
    .then(response => {
        dispatch(setStatus(response.data))
    })
}

export const updateUserStatus = (status) => (dispatch) => {    
    profileAPI.updateStatus(status)
    .then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    })
}

export default profileReducer;