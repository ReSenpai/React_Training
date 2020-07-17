import React from 'react';
import style from './Message.module.css'

const Message = (props) => {
    return (
        <div className={style.message__wrapper}>
            <span className={style.message}>
                {props.message}
            </span>
        </div>
    )
}

export default Message;