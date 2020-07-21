import React from 'react';
import style from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {
    return (
        <div>
            <h2 className="title">
                Friends
            </h2>
            <div className={ style.friends__wrapper }>
                <Friend
                    className={ style.friend }
                    name='Andrew'
                    avatar='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d1c64938267389.575aefd5063e6.png' />
                <Friend
                    className={ style.friend }
                    name='Alex'
                    avatar='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d1c64938267389.575aefd5063e6.png' />
                <Friend
                    className={ style.friend }
                    name='Sveta'
                    avatar='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d1c64938267389.575aefd5063e6.png' />
            </div>
        </div>
    )
}

export default Friends