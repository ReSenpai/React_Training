import React from 'react';
import style from './Message.module.css'

const Message = (props) => {

    let wrapperClasses, messageClasses;
    
    if (props.type === 'user') {
        wrapperClasses = [style.message__wrapper, style.right].join(' ');
        messageClasses = [style.message, style.green].join(' ');
    } else {
        wrapperClasses = style.message__wrapper;
        messageClasses = [style.message, style.grey].join(' ')
    }

    return (
        <div className={ wrapperClasses }>
            <span className={ messageClasses }>
                { props.message }
            </span>
        </div>
    )
}

export default Message;