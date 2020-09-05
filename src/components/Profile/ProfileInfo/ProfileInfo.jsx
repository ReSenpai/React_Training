import React, { useState } from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import SocialMedia from '../../common/SocialMedia/SocialMedia';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import defaultAvatar from '../../../assets/images/defaultAvatar.png';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';
import { ReactComponent as EditPhotoIcon } from '../../../assets/icons/edit_photo.svg';
import { ReactComponent as EditProfileInfoIcon } from '../../../assets/icons/edit_profile_info.svg';
import { Modal, Form } from 'react-bootstrap';
import { FORM_ERROR } from 'final-form';

const ProfileInfo = ({
    profile, 
    status, 
    updateUserStatus, 
    isOwner, 
    savePhoto, 
    updateProfile
}) => {

    const [editMode, setEditMode] = useState(false);
    const activateEditMode = () => setEditMode(true);
    const deactivateEditMode = () => setEditMode(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onMainPhotoSelected = (event) => {
        if (event.target.files.length) {
            savePhoto(event.target.files[0]);
        }
        handleClose();
    }

    const onSubmit = async (formData) => {
        const err = await updateProfile(formData);
        if (err) {
            return {[FORM_ERROR]: err}
        } else {
            deactivateEditMode();
        }
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
                        && <EditPhotoIcon 
                            className={ styles.button } 
                            onClick={ handleShow }/>}
                    </div>
                    <Modal show={ show } onHide={ handleClose } centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Change photo</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId='formBasicChangePhoto'>
                                    <Form.File label="Select file to change"  
                                    onChange={ onMainPhotoSelected } />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                    </Modal>
                    <ProfileStatus 
                    status={ status }
                    updateUserStatus={ updateUserStatus } />
                </div>
                <div className={ styles.infoWrapper }>
                    <ProfileData 
                        profile={ profile } 
                        isOwner={ isOwner }
                        activateEditMode={ activateEditMode } />
                    <ProfileDataForm 
                        profile={ profile }
                        editMode={ editMode } 
                        onSubmit={ onSubmit }
                        deactivateEditMode={ deactivateEditMode } />
                </div>
            </div>
        </div>

    )    
}

const ProfileData = ({profile, isOwner, activateEditMode}) => {
    return (
        <div>
            { isOwner && <div><EditProfileInfoIcon className={ styles.editProfileIcon } onClick={ activateEditMode }/></div> }
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