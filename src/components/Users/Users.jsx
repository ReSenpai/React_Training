import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/anonimus.jpg'
import { NavLink } from 'react-router-dom';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    return (
        <div className={ styles.users__wrapper }>
            <div>
                <span className={styles.count}>{ 
                    props.currentPage - 1 ?
                    props.currentPage - 1 :
                    'Start' }</span>
                <button 
                    className={ styles.button }
                    onClick={ () => props.onPageChanged(props.currentPage -1 ) }
                >Left</button>
                <button 
                    className={ styles.button }
                    onClick={ () => props.onPageChanged(props.currentPage + 1) }
                >Right</button>
                <span className={styles.count}>{ 
                    props.currentPage + 1 < props.totalUsersCount ?
                    props.currentPage + 1 :
                    'End'  }</span>
                <span>Total pages { pagesCount }</span>
            </div>    
            {
                props.users.map(user =>
                    <div
                        key={ user.id } 
                        className={ styles.user__wrapper }>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <img
                                    className={ styles.image } 
                                    src={ 
                                        user.photos.small ? 
                                        user.photos.small :
                                        userPhoto
                                    } 
                                    alt="user photo"/>
                            </NavLink>
                        </div>
                        <div className={ styles.username__wrapper }>
                            <span>{ user.name }</span>
                            <span>{ user.name }</span>
                        </div>
                        <div className={ styles.button__wrapper }>
                            {
                            user.followed ? 
                            <button 
                                className={ styles.button } 
                                onClick={ () => 
                                    props.unfollow(user.id) 
                                }>Unsubscribe</button> : 
                            <button 
                                className={ styles.button } 
                                onClick={ () => 
                                    props.follow(user.id) 
                                }>Subscribe</button> 
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Users;