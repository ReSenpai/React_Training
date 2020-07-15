import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.img__wrapper}>
                <img className={style.images} src='https://i.pinimg.com/originals/6f/2d/34/6f2d34fe6c8746c56c14fbc55308ef99.jpg' alt='anime background'></img>
            </div>
            <div>
                avatar + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;