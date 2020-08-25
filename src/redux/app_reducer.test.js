import appReducer, { initializationSuccess } from "./app_reducer";

let state = {
    isInitialized: false
}

describe('Actions into reducer', () => {
    describe('initializationSuccess:', () => {

        const initializationSuccessAction = () => appReducer(state, initializationSuccess());

        test('isInitialized should be defined', () => {
            expect(initializationSuccessAction().isInitialized).toBeDefined();
        });
        test('isInitialized should be true', () => {
            expect(initializationSuccessAction().isInitialized).toBe(true);
        });
    });
});