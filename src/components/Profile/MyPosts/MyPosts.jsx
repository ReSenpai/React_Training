import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id: 1, nickname: 'Katerina', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo veritatis, corrupti assumenda quidem impedit delectus facere in neque nulla, odio quibusdam, reprehenderit quaerat expedita quod cum iure ipsum provident laborum.', avatar: 'https://www.vranimesociety.com/assets/logo-ca820fd22dfa0d8709ba05792671557237691b242eaa87ddc8e5438fe8c72fdc.webp', like: 0},
        {id: 2, nickname: 'Elza', text: 'I don\'t no', avatar: 'https://data.whicdn.com/images/333477434/original.jpg'},
        {id: 3, nickname: 'Bot9000', text: 'Whyyyyyyyyyyyyyyyyyyyyy?', avatar: 'https://i.pinimg.com/736x/f8/8f/31/f88f31f29fb6e42b8c387743405166b7.jpg'},
        {id: 4, nickname: 'Human', text: 'Why not :)', avatar: 'https://pbs.twimg.com/profile_images/1082020318523412480/E87sUSUc_400x400.jpg'},
        {id: 5, nickname: 'Solo', text: 'Olivia', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTB1XNd7zac9ZAJs3LHlgHbGdhVsjyohiqHQ&usqp=CAU'}
    ]

    let postsElement = postsData.map( (post, i) => <Post
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