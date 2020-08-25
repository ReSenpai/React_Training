import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/anonimus.jpg'
import { NavLink } from 'react-router-dom';
import Pagination from '../common/Pagination/Pagination';

const Users = ({
    totalUsersCount,
    pageSize,
    currentPage,
    users,
    onPageChanged,
    unfollow,
    follow,
    followingInProgress
}) => {

    return (
        <div className={ styles.users__wrapper }>
            <Pagination { ...{totalUsersCount, pageSize, currentPage, onPageChanged} } />
            {
                users.map(user =>
                    <div
                        key={ user.id } 
                        className={ styles.user__wrapper }>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <img
                                    className={ styles.image } 
                                    src={ user.photos.small
                                            ? user.photos.small
                                            : userPhoto } 
                                    alt="user photo"/>
                            </NavLink>
                        </div>
                        <div className={ styles.username__wrapper }>
                            <span>{ user.name }</span>
                            <span>{ user.status }</span>
                        </div>
                        <div className={ styles.button__wrapper }>
                            { user.followed
                            ? <button 
                                className={ styles.button } 
                                disabled={ followingInProgress.some(id => id === user.id) }
                                onClick={ () => unfollow(user.id) }>Unsubscribe</button>
                            : <button 
                                className={ styles.button }
                                disabled={ followingInProgress.some(id => id === user.id) } 
                                onClick={ () => follow(user.id) }>Subscribe</button> 
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Users;