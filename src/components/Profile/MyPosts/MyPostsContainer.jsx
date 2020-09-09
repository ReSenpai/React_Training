import React from 'react';
import { 
    addPost
} from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { getPosts } from '../../../redux/profile_selectors';


const mapStateToProps = (state) => {
    return {
        posts: getPosts(state),
        newPostText: state.profilePage.newPostText // maybe it's no longer in use
    }  
}

const MyPostsContainer = connect(mapStateToProps, {
    addPost
})(MyPosts);

export default MyPostsContainer;