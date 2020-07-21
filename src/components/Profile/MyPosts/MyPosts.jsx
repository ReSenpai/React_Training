import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    
    let postsElement = props.posts.map((post, i) => <Post
        key={ i }
        nickname={ post.nickname }
        text={ post.text }
        src={ post.avatar }
        like={ post.like } />
    );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost(); 
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    let pressEnter = (event) => {
        if (event.key === 'Enter') {
            addPost();
        }
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        className={ style.textarea }
                        ref={ newPostElement }
                        value={ props.newPostText }
                        onChange={ onPostChange }
                        onKeyPress={ pressEnter } />
                </div>
                <div>
                    <button onClick={ addPost }>Add Post</button>
                </div>
            </div>
            <div className={ style.posts }>
                { postsElement }
            </div>
        </div>
    );
}

export default MyPosts;