import React from 'react';
import styles from './Users.module.css';
import Pagination from '../common/Pagination/Pagination';
import User from './User';
import { UserType } from '../../types/types';

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    onPageChanged: (page: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    followingInProgress: Array<number>
}

const Users: React.FC<PropsType> = ({
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