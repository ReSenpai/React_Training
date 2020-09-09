import { getAuthUserData } from "./auth_reducer";

const SET_INITIALIZATION = 'app/SET_INITIALIZATION';

let initialState = {
    isInitialized: false as boolean
}
export type InitialStateType = typeof initialState;

const appReducer = (state = initialState, action: any): InitialStateType => {

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

type InitializationSuccessActionType = { type: typeof SET_INITIALIZATION }

export const initializationSuccess = (): InitializationSuccessActionType => ({ 
    type: SET_INITIALIZATION
});

export const startInitialization = () => (dispatch: any) => {
    const authUserData = dispatch(getAuthUserData());

    Promise.all([authUserData])
    .then(() => {
        dispatch(initializationSuccess());
    });
}

export default appReducer;