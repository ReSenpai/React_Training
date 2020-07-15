import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={style.item}>
                <img className={style.avatar} src={props.src} alt='avatar'></img>
                { props.text }
            </div>
            <span>Like {props.like} </span>
        </div>
    );
}

export default Post;