import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Valera'},
        {id: 4, name: 'Polya'},
        {id: 5, name: 'Anna'},
        {id: 6, name: 'Oliva'},
        {id: 7, name: 'Korina'},
    ]

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: "I don't no"},
        {id: 3, message: 'Abrakadabra'},
        {id: 4, message: 'Step for my sister'},
        {id: 5, message: 'Omnon nim'},
        {id: 6, message: 'Nuaah'},
        {id: 7, message: 'Poly'},
    ]

    let dialogElements = dialogsData
    .map( (dialog, i) => <DialogItem key={i} name={ dialog.name } id={ dialog.id } />)

    let messagesElement = messages
    .map( (message, i) => <Message key={i} message={message.message} />)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs__item}>
                { dialogElements }
            </div>
            <div className={style.messages}>
                { messagesElement }
            </div>
        </div>
    )
}

export default Dialogs;