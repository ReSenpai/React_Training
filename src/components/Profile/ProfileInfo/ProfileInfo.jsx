import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (prosp) => {

    if (!prosp.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={style.img__wrapper}>
                <img className={style.images} src='https://i.pinimg.com/originals/6f/2d/34/6f2d34fe6c8746c56c14fbc55308ef99.jpg' alt='anime background'></img>
            </div>
            <div>
                <img src={ prosp.profile.photos.large } alt="User photo"/>
                avatar + description
                </div>
        </div>

    )    
}

export default ProfileInfo;