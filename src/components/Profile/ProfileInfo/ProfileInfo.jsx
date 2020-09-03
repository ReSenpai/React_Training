import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import SocialMedia from '../../common/SocialMedia/SocialMedia';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import defaultAvatar from '../../../assets/images/defaultAvatar.png';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, updateProfile}) => {

    let [editMode, setEditMode] = useState(false);
    const activateEditMode = () => setEditMode(true);
    const deactivateEditMode = () => setEditMode(false);

    const onMainPhotoSelected = (event) => {
        if (event.target.files.length) {
            savePhoto(event.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        updateProfile(formData);
        setEditMode(false);
    }

    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={ styles.img__wrapper} >
                <img 
                    className={ styles.images } 
                    src='https://i.pinimg.com/originals/6f/2d/34/6f2d34fe6c8746c56c14fbc55308ef99.jpg' 
                    alt='anime background'>
                </img>
            </div>
            <div className={ styles.user_info_container }>
                <div>
                    <div className={ styles.userPhotoContainer }>
                        <img
                            className={ styles.user_photo } 
                            src={ profile.photos.large || defaultAvatar } 
                            alt="User photo"/>
                        { isOwner 
                        && <input 
                            className={ styles.button } 
                            type='file' 
                            onChange={ onMainPhotoSelected } />}
                    </div>
                    <ProfileStatus 
                    status={ status }
                    updateUserStatus={ updateUserStatus } />
                </div>
                <div className={ styles.infoWrapper }>
                    { editMode 
                        ? <ProfileDataForm 
                            profile={ profile }
                            onSubmit={ onSubmit }
                            deactivateEditMode={ deactivateEditMode } /> 
                        : <ProfileData 
                            profile={ profile } 
                            isOwner={ isOwner } 
                            activateEditMode={ activateEditMode } /> 
                    }
                </div>
            </div>
        </div>

    )    
}

const ProfileData = ({profile, isOwner, activateEditMode}) => {
    return (
        <div>
            { isOwner && <div><button onClick={ activateEditMode }>edit</button></div> }
            <h2>{ profile.fullName }</h2>
            <div>
                <b>Поиск работы: </b> { profile.lookingForAJob
                    ? 'Да'
                    : 'Нет' 
                }
            </div>
            { profile.lookingForAJob &&
                <div>
                    <b>Мои скиллы: </b> { profile.lookingForAJobDescription }
                </div>
            }
            <div>
                <b>Обо мне: </b> { profile.aboutMe }
            </div>
            <SocialMedia contacts={ profile.contacts } />
        </div>
    )
}

export default ProfileInfo;