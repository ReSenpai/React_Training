import React from 'react';
import { 
    addPost, AddPostActionType
} from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { getPosts } from '../../../redux/profile_selectors';
import { AppStateType } from '../../../redux/redux_store';
import { PostType } from '../../../types/types';

type MapStatePropsType = {
    posts: Array<PostType>
}

type MapDispatchPropsType = {
    addPost: (newPostText: string) => AddPostActionType
}

type OwnPropsType = {
    
}

export type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: getPosts(state)
    }  
}

const MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    addPost
})(MyPosts);

export default MyPostsContainer;