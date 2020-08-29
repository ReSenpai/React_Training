import React from 'react';
import styles from './Users.module.css';
import Pagination from '../common/Pagination/Pagination';
import User from './User';

const Users = ({
    totalItemsCount,
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
            <Pagination {...{totalItemsCount, pageSize, currentPage, onPageChanged}} />
            {
                users.map(user =>
                    <User
                        key={ user.id }
                        {...{ user, unfollow, follow, followingInProgress }} />
                )
            }
        </div>
    )
}

export default Users;