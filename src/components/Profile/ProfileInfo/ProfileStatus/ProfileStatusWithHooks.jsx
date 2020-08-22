import React, { useState } from 'react';
import { ReactComponent as MeditationIcon } from '../../../../assets/icons/self_improvement.svg' 
import styles from './ProfileStatus.module.css';


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value);
    }

    return (
        <div className={ styles.profileStatusContainer }>
            Status: 
            <MeditationIcon />
            { !editMode &&
                <div className={ styles.SpanWrapper}>
                    <span
                        onDoubleClick={ activateEditMode }>
                        { props.status || 'Поделитесь своими мыслями :3' } 
                    </span>
                </div>
            }
            { editMode &&
                <div>
                    <input 
                        type="text" 
                        value={ status || '' }
                        onBlur={ deactivateEditMode }
                        autoFocus={ true }
                        placeholder='Status'
                        onChange={ onStatusChange }
                         />
                </div>
            }
        </div>
    );   
}

export default ProfileStatusWithHooks;