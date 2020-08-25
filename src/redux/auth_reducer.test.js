import authReducer, { setAuthUserData } from "./auth_reducer";

let state = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true,
    captcha: null
};

describe('Actions into reducer', () => {
    describe('setAuthUserData:', () => {

        const setAuthUserDataAction = (isAuth) => authReducer(state, setAuthUserData(
            1234353, 'elza@gmail.com', 'elza', isAuth
        ));
        
        describe('State value should be defined: ', () => {
            test('userid', () => expect(setAuthUserDataAction(true).userId).toBeDefined());
            test('email', () => expect(setAuthUserDataAction(true).email).toBeDefined());
            test('login', () => expect(setAuthUserDataAction(true).login).toBeDefined());
            test('isAuth', () => expect(setAuthUserDataAction(true).isAuth).toBeDefined());
        });
        describe('State value should not be null: ', () => {
            test('userid', () => expect(setAuthUserDataAction(true).userId).not.toBeNull());
            test('email', () => expect(setAuthUserDataAction(true).email).not.toBeNull());
            test('login', () => expect(setAuthUserDataAction(true).login).not.toBeNull());
            test('isAuth', () => expect(setAuthUserDataAction(true).isAuth).not.toBeNull());
        });
        describe('After added to state, data must be correct: ', () => {
            test('userid', () => expect(setAuthUserDataAction(true).userId).toBe(1234353));
            test('email', () => expect(setAuthUserDataAction(true).email).toBe('elza@gmail.com'));
            test('login', () => expect(setAuthUserDataAction(true).login).toBe('elza'));
            test('isAuth', () => expect(setAuthUserDataAction(true).isAuth).toBe(true));
            test('isAuth', () => expect(setAuthUserDataAction(false).isAuth).toBe(false));
        });
        
    });
});