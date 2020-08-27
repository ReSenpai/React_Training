import dialogsReducer, { sendMessage } from "./dialogs_reducer";

let state = {
    messages: [
        { id: 1, type: 'answer', message: 'Hello' },
        { id: 2, type: 'answer', message: "I don't no" },
        { id: 3, type: 'user',  message: 'Abrakadabra' },
        { id: 4, type: 'answer',  message: 'Step for my sister' },
        { id: 5, type: 'user',  message: 'Omnon nim' },
        { id: 6, type: 'answer',  message: 'Nuaah' },
        { id: 7, type: 'answer',  message: 'Poly' }
    ]
};

describe('Actions into reducer', () => {

    const sendMessageAction = (message) => dialogsReducer(state, sendMessage(message));

    test('Length of the posts should increase', () => {
        expect(sendMessageAction('Elza').messages.length).toBe(8);
    });
    test('Post should be added to the beginning of the array and be correct', () => {
        expect(sendMessageAction('Elza').messages[7].message).toBe('Elza');
    });
    test('Post should be defined', () => {
        expect(sendMessageAction('Elza').messages[7].message).toBeDefined();
    });

});