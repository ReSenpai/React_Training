import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { Form, Field } from 'react-final-form'


const MyPosts = (props) => {
    
    let postsElement = props.posts.map((post, i) => <Post
        key={ i }
        nickname={ post.nickname }
        text={ post.text }
        src={ post.avatar }
        like={ post.like } />
    );
    
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }


    // let pressEnter = (event) => {
    //     if (event.key === 'Enter') {
    //         onAddPost();
    //     }
    // }


    return (
        <div>
            <h3>My posts</h3>
            <div>
                <AddNewPostForm onSubmit={ onAddPost } />
            </div>
            <div className={ style.posts }>
                { postsElement }
            </div>
        </div>
    );
}

const AddNewPostForm = (props) => {
    return (
        <Form
            onSubmit={ props.onSubmit }
            render={({ handleSubmit }) => (
                <form onSubmit={ handleSubmit }>
                   <div>
                    <Field
                        component='textarea'
                        name='newPostText'
                        placeholder='Add post...' />
                    </div>
                    <div>
                        <button>Add Post</button>
                    </div>
                </form>
            )}
        />
    )
}



export default MyPosts;