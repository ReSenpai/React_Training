import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <div className={ style.wrapper }>
            <ProfileInfo 
                profile={ props.profile }
                status={ props.status }
                updateUserStatus={ props.updateUserStatus } />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;