import React from 'react';
import style from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

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

    let essagesData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: "I don't no"},
        {id: 3, message: 'Abrakadabra'},
        {id: 4, message: 'Step for my sister'},
        {id: 5, message: 'Omnon nim'},
        {id: 6, message: 'Nuaah'},
        {id: 7, message: 'Poly'},
    ]

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs__item}>
                <DialogItem name='Dimich' id='1' />
                <DialogItem name='Sveta' id='2' />
                <DialogItem name='Valera' id='3' />
                <DialogItem name='Polya' id='4' />
                <DialogItem name='Anna' id='5' />
                <DialogItem name='Oliva' id='6' />
                <DialogItem name='Korina' id='7' />
            </div>
            <div className={style.messages}>
                <Message message='Hello' />
                <Message message="I don't no" />
                <Message message='Abrakadabra' />
                <Message message='Step for my sister' />
                <Message message='Omnon nim' />
                <Message message='Nuaah' />
                <Message message='Poly' />
            </div>
        </div>
    )
}

export default Dialogs;