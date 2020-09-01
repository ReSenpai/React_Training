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

describe('Actions into reducer', () => {
    describe('addPost:', () => {

        const addPostAction = (post) => profileReducer(state, addPost(post));

        test('Length of the posts should increase', () => {
            expect(addPostAction('Elza').posts.length).toBe(6);
        });
        test('Post should be added to the beginning of the array and be correct', () => {
            expect(addPostAction('Elza').posts[0].text).toBe('Elza');
        });
        test('Post should be defined', () => {
            expect(addPostAction('Elza').posts[0].text).toBeDefined();
        });
    });
    describe('deletePost:', () => {

        const deletePostAction = (id) => profileReducer(state, deletePost(id));

        test('After removed length of the posts (array) should be reduced', () => {
            expect(deletePostAction(1).posts.length).toBe(4);
        });
        test('After removed length of the array should not change if the id was incorrect.', () => {
            expect(deletePostAction(undefined).posts.length).toBe(5);
        });
    });
    describe('setUserProfile:', () => {
        const profileObj = {name: 'Elza', age: '25'};
        const setUserProfileAction = (profile) => profileReducer(state, setUserProfile(profile));

        test('Profile value should be the object', () => {
            expect(
                (typeof setUserProfileAction(profileObj).profile === "object") 
                && (!Array.isArray(setUserProfileAction(profileObj).profile))
            ).toBeTruthy();
        });
        test('User object should come to the profile and should not be empty', () => {
            expect(setUserProfileAction(profileObj).profile).toEqual(profileObj);
        });
        test('Profile value should be defined', () => {
            expect(setUserProfileAction(profileObj).posts[0].text).toBeDefined();
        });
        test('Profile value should not be null', () => {
            expect(setUserProfileAction(profileObj).posts[0].text).not.toBeNull();
        });
    });
    describe('setStatus:', () => {

        const setStatusAction = (status) => profileReducer(state, setStatus(status));

        test('Length of the status should increase', () => {
            expect(setStatusAction('React').status.length).toBeGreaterThan(1);
        });
        test('Status data type should be a "String"', () => {
            expect(typeof setStatusAction('That is string').status).toBe('string');
        });
        test('Status value should be defined', () => {
            expect(setStatusAction('React').status).toBeDefined();
        });
        test('Status value should be correct', () => {
            expect(setStatusAction('Hello friend').status).toBe('Hello friend');
        });
    });
});

