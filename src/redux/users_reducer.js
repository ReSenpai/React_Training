import { usersAPI } from "../api/api";
import { changeObjToArr } from "../utils/objects_helpers/objects_helpers";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return { 
                ...state,
                users: changeObjToArr(state.users, action.userId, 'id',{ followed: true }) 
            }
        case UNFOLLOW:
            return { 
                ...state,
                users: changeObjToArr(state.users, action.userId, 'id',{ followed: false })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage ? action.currentPage : 1
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching 
                    ? [...state.followingInProgress, action.userId] 
                    : [...state.followingInProgress.filter(id => id != action.userId)]
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })
/**
 * Redux Thunk to get users into state
 * @param {Number} page 
 * @param {Number} pageSize 
 */
export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount)); 
}

export const getUsersAfterChanged = (pageNumber, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleIsFetching(true));
    if (pageNumber > 0) {
        const data = await usersAPI.getUsers(pageNumber, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
    } 
}

const followUnfollowFlow = async (userId, dispatch, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    const resultCode = await apiMethod(userId);
    if (resultCode === 0) {
        dispatch(actionCreator(userId)); 
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(
        userId, 
        dispatch, 
        usersAPI.follow.bind(usersAPI), 
        followSuccess
    );
}

export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(
        userId, 
        dispatch, 
        usersAPI.unfollow.bind(usersAPI), 
        unfollowSuccess
    );
}

export default usersReducer;