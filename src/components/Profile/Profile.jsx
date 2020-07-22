import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={ style.wrapper }>
            <ProfileInfo />
            <MyPosts 
                posts={ props.posts }
                newPostText={ props.newPostText }
                addPost={ props.addPost }
                updateNewPostText={ props.updateNewPostText } />
        </div>
    );
}

export default Profile;