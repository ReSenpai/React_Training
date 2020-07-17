import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElement = props.posts.map( (post, i) => <Post
    key={i}
    nickname={post.nickname}
    text={post.text}
    src={post.avatar}
    like={post.like} /> )

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea className={style.textarea}></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={style.posts}>
                { postsElement }
            </div>
        </div>
    );
}

export default MyPosts;