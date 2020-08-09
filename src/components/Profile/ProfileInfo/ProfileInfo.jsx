import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import SocialMedia from '../../common/SocialMedia/SocialMedia';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={ style.img__wrapper} >
                <img 
                    className={ style.images } 
                    src='https://i.pinimg.com/originals/6f/2d/34/6f2d34fe6c8746c56c14fbc55308ef99.jpg' alt='anime background'></img>
            </div>
            <div className={ style.user_photo__wrapper }>
                <ProfileStatus status={ 'Hello hello' } />
                <img
                    className={ style.user_photo } 
                    src={ props.profile.photos.large
                            ? props.profile.photos.large
                            : 'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png' } 
                    alt="User photo"/>
                <div>{ props.profile.fullName }</div>
                <div>{ props.profile.aboutMe }</div>
                <div>{ 
                    props.profile.lookingForAJob ? 
                    props.profile.lookingForAJobDescription : 
                    'Не ищу работу' 
                }</div>
                <SocialMedia />
            </div>
        </div>

    )    
}

export default ProfileInfo;