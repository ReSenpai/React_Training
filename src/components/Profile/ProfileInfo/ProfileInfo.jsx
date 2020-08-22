import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import SocialMedia from '../../common/SocialMedia/SocialMedia';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={ style.img__wrapper} >
                <img 
                    className={ style.images } 
                    src='https://i.pinimg.com/originals/6f/2d/34/6f2d34fe6c8746c56c14fbc55308ef99.jpg' 
                    alt='anime background'>
                </img>
            </div>
            <div className={ style.user_info_container }>
                <div>
                    <img
                        className={ style.user_photo } 
                        src={ 
                            props.profile.photos.large
                                ? props.profile.photos.large
                                : 'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png' 
                            } 
                        alt="User photo"/>
                    <ProfileStatusWithHooks 
                    status={ props.status }
                    updateUserStatus={ props.updateUserStatus } />
                </div>
                <div>
                    <h2>{ props.profile.fullName }</h2>
                    <div>{ props.profile.aboutMe }</div>
                    <div>{ 
                        props.profile.lookingForAJob
                            ? props.profile.lookingForAJobDescription
                            : 'Не ищу работу' 
                        }
                    </div>
                    <SocialMedia />
                </div>
            </div>
        </div>

    )    
}

export default ProfileInfo;