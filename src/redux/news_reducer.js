
const UPDATE_NEW_SEARCH_QUERY = 'UPDATE_NEW_SEARCH_QUERY';

let initialState = {
    searchResult: [],
    newSearchQuery: 'test',
    isFetching: true
};

const newsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_SEARCH_QUERY:
            return {
                ...state,
                newSearchQuery: action.newSearchQuery
            }
        default:
            return state;
    }
}

export const updateNewSearchQuery = (text) => ({
    type: UPDATE_NEW_SEARCH_QUERY,
    newSearchQuery: text
})
// export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

// export const getUserProfile = (userId) => (dispatch) => {    
//     if (!userId) {
//         profileAPI.authMe()
//         .then(data => {
//             userId = data.data.id;
//         })
//         .then(() => {
//             profileAPI.getUserProfile(userId)
//             .then(data => dispatch(setUserProfile(data)));
//         })
//     } else {
//         profileAPI.getUserProfile(userId)
//         .then(data => dispatch(setUserProfile(data)));
//     } 
// }

export default newsReducer;