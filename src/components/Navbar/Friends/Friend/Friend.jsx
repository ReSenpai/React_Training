import React from 'react';
import style from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={ style.friend__wrapper }>
            <div>
                <img src={ props.avatar } alt="avatar" className={ style.avatar }/>
            </div>
            <div>
                <span className="name"> { props.name } </span>
            </div>
        </div>
    )
}

export default Friend