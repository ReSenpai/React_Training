import React from 'react';
import style from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';
import { DialogType } from '../../../types/types';

const DialogItem: React.FC<DialogType> = (props) => {
    return (
        <div className={ style.dialog__wrapper }>
            <NavLink 
                className={ style.dialog } 
                activeClassName={ style.active }
                to={`/messages/${ props.id }`}>
                <img 
                src={ props.avatar }
                alt='User avatar'
                className={ style.avatar }></img>
                { props.name }
            </NavLink>
        </div>
    )
}

export default DialogItem;