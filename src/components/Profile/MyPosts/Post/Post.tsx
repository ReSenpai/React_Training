import React from 'react';
import style from './Post.module.css';


type PropsType = {
    key: number
    nickname: string
    text: string
    src: string
    like: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={style.post__wrapper}>
            <h3>{props.nickname}</h3>
            <div className={style.item}>
                <img className={style.avatar} src={props.src} alt='avatar'></img>
                <span>{ props.text }</span>
            </div>
            <span>Like {props.like} </span>
        </div>
    );
}

export default Post;