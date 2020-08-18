import { getAuthUserData } from "./auth_reducer";

const SET_INITIALIZATION = 'SET_INITIALIZATION';

let initialState = {
    isInitialized: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZATION: {
            return {
                ...state,
                isInitialized: true
            };
        }
        default:
            return state;
    }  
}

export const initializationSuccess = () => ({ type: SET_INITIALIZATION });

export const startInitialization = () => (dispatch) => {
    const authUserData = dispatch(getAuthUserData());

    Promise.all([authUserData])
    .then(() => {
        dispatch(initializationSuccess());
    });
}

export default appReducer;