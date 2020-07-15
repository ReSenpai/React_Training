import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea className={style.textarea}></textarea>
                <button>Add Post</button>
            </div>
            <div>
                <Post
                    text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo veritatis, corrupti assumenda quidem impedit delectus facere in neque nulla, odio quibusdam, reprehenderit quaerat expedita quod cum iure ipsum provident laborum.'
                    src='https://www.vranimesociety.com/assets/logo-ca820fd22dfa0d8709ba05792671557237691b242eaa87ddc8e5438fe8c72fdc.webp'
                    like='0' />
                <Post
                    text="I don't no"
                    src='https://data.whicdn.com/images/333477434/original.jpg'
                    like='5' />
                <Post
                    text='Whyyyyyyyyyyyyyyyyyyyyy?'
                    src='https://i.pinimg.com/736x/f8/8f/31/f88f31f29fb6e42b8c387743405166b7.jpg'
                    like='10' />
                <Post
                    text='Why not :)'
                    src='https://pbs.twimg.com/profile_images/1082020318523412480/E87sUSUc_400x400.jpg'
                    like='3' />
                <Post
                    text='Olivia'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTB1XNd7zac9ZAJs3LHlgHbGdhVsjyohiqHQ&usqp=CAU'
                    like='7' />
            </div>
        </div>
    );
}

export default MyPosts;