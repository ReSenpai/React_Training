import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { Form, Field } from 'react-final-form'
import { maxLengthCreator, composeValidators, voidCheck } from '../../../utils/validators/validators';
import { Input } from '../../common/FormsControls/FormsControls';
import { useState } from 'react';
import { Form as FormBootsrap, Button, Modal } from 'react-bootstrap';


const MyPosts = (props) => {
    let postsElement = props.posts.map((post, i) => <Post
        key={ i }
        nickname={ post.nickname }
        text={ post.text }
        src={ post.avatar }
        like={ post.like } />
    );

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
        // .replace(/\r?\n/g, '\n')
        handleClose();
        values.newPostText = '';
    }

    let pressEnter = (callback) => (event) => {
        if (event.shiftKey && event.key === 'Enter') {
            // add space
        } 
        else if (event.key === 'Enter') {
            event.preventDefault();
            callback();
        }
    }

    return (
        <div>
            <h3>My posts</h3>
            <button onClick={ handleShow }>Add post</button>
            <div>
                <AddNewPostForm 
                    onSubmit={ onAddPost } 
                    pressEnter={ pressEnter } 
                    show={ show }
                    handleClose={ handleClose } />
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
            initialValues={{ employed: true }}
            render={({ handleSubmit, submitting, pristine }) => (
                <Modal show={ props.show } onHide={ props.handleClose } centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Add post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormBootsrap onSubmit={ handleSubmit }>
                            <FormBootsrap.Group controlId="exampleForm.ControlTextarea1">
                                <Field
                                    component={ Input }
                                    as="textarea"
                                    rows="5"
                                    name='newPostText'
                                    placeholder='What are you thinking?'
                                    onKeyPress={ props.pressEnter(handleSubmit) }
                                    validate={ composeValidators(maxLengthCreator(120), voidCheck) } />
                            </FormBootsrap.Group>
                            <Button 
                                className='float-right' 
                                type='submit' 
                                variant="primary"
                                disabled={submitting || pristine} >Add post</Button>
                        </FormBootsrap>
                    </Modal.Body>
                </Modal>
            )}
        />
    )
}



export default React.memo(MyPosts);