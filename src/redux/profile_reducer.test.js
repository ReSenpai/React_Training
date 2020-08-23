import profileReducer, { addPost, deletePost } from "./profile_reducer";
import React from 'react';
import { render } from '@testing-library/react';
// 1. test data
let state = {
    posts: [
        { id: 1, nickname: 'Katerina', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo veritatis, corrupti assumenda quidem impedit delectus facere in neque nulla, odio quibusdam, reprehenderit quaerat expedita quod cum iure ipsum provident laborum.', avatar: 'https://www.vranimesociety.com/assets/logo-ca820fd22dfa0d8709ba05792671557237691b242eaa87ddc8e5438fe8c72fdc.webp', like: 0 },
        { id: 2, nickname: 'Elza', text: 'I don\'t no', avatar: 'https://data.whicdn.com/images/333477434/original.jpg', like: 10 },
        { id: 3, nickname: 'Bot9000', text: 'Whyyyyyyyyyyyyyyyyyyyyy?', avatar: 'https://i.pinimg.com/736x/f8/8f/31/f88f31f29fb6e42b8c387743405166b7.jpg', like: 5 },
        { id: 4, nickname: 'Human', text: 'Why not :)', avatar: 'https://pbs.twimg.com/profile_images/1082020318523412480/E87sUSUc_400x400.jpg', like: 1 },
        { id: 5, nickname: 'Solo', text: 'Olivia', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTB1XNd7zac9ZAJs3LHlgHbGdhVsjyohiqHQ&usqp=CAU', like: 4 }
    ]
};

test('The length of the posts should increase', () => {
    let action = addPost('Elza');
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expection
    expect(newState.posts.length).toBe(6);
});
test('The post should be added to the beginning of the array and be correct', () => {
    let action = addPost('Elza');
    let testState = profileReducer(state, action);
    expect(testState.posts[0].text).toBe('Elza');
});
test('After removed, the length of the posts (array) should be reduced', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});
test('After removed, the length of the array should not change if the id was incorrect.', () => {
    let action = deletePost(undefined);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5);
});