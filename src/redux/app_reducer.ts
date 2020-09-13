import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getAuthUserData } from "./auth_reducer";
import { AppStateType } from "./redux_store";

const SET_INITIALIZATION = 'app/SET_INITIALIZATION';

let initialState = {
    isInitialized: false as boolean
}
export type InitialStateType = typeof initialState;

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

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

type ActionsTypes = InitializationSuccessActionType;

type InitializationSuccessActionType = { type: typeof SET_INITIALIZATION }

export const initializationSuccess = (): InitializationSuccessActionType => ({ 
    type: SET_INITIALIZATION
});


type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;


export const startInitialization = ()
: ThunkAction<void, AppStateType, unknown, ActionsTypes> => (dispatch) => {
    const authUserData = dispatch(getAuthUserData());

    Promise.all([authUserData])
    .then(() => {
        dispatch(initializationSuccess());
    });
}

export default appReducer;