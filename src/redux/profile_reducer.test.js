import profileReducer, { addPost, deletePost, setUserProfile, setStatus } from "./profile_reducer";

// 1. test data
let state = {
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

describe('addPost action:', () => {
    test('length of the posts should increase', () => {
        let action = addPost('Elza');
        // 2. action
        let testState = profileReducer(state, action);
        // 3. expection
        expect(testState.posts.length).toBe(6);
    });
    test('post should be added to the beginning of the array and be correct', () => {
        let newState = profileReducer(state, addPost('Elza'));
        expect(newState.posts[0].text).toBe('Elza');
    });
});
describe('deletePost action:', () => {
    test('After removed, the length of the posts (array) should be reduced', () => {
        let newState = profileReducer(state, deletePost(1));
        expect(newState.posts.length).toBe(4);
    });
    test('After removed, the length of the array should not change if the id was incorrect.', () => {
        let newState = profileReducer(state, deletePost(undefined));
        expect(newState.posts.length).toBe(5);
    });
});
describe('setUserProfile action:', () => {
    test('The profile value should be the object', () => {
        let newState = profileReducer(state, setUserProfile({}));
        expect(
            (typeof newState.profile === "object") 
            && (!Array.isArray(newState.profile))
        ).toBeTruthy();
    });
    test('User object should come to the profile and should not be empty', () => {
        let newState = profileReducer(state, setUserProfile({name: 'Elza', age: '25'}));
        expect(newState.profile).toEqual({name: 'Elza', age: '25'});
    });
});
describe('setStatus action:', () => {
    test('length of the status should increase', () => {
        let newState = profileReducer(state, setStatus('React'));
        expect(newState.status.length).toBeGreaterThan(1);
    });
    test('status data type should be a line', () => {
        let newState = profileReducer(state, setStatus('That is string'));
        expect(typeof newState.status).toBe('string');
    });
});

