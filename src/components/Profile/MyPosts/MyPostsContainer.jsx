import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
    
    let postsElement = props.posts.map((post, i) => <Post
        key={ i }
        nickname={ post.nickname }
        text={ post.text }
        src={ post.avatar }
        like={ post.like } />
    );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator()); 
    }

    let onPostChange = (text) => {
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    let pressEnter = (event) => {
        if (event.key === 'Enter') {
            addPost();
        }
    }

    return (
        <MyPosts updateNewPostText={ onPostChange } />
    );
}

export default MyPostsContainer;