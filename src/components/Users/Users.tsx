import React from 'react';
import Pagination from '../common/Pagination/Pagination';
import User from './User';
import { UserType } from '../../types/types';
import styled from 'styled-components';

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
        <Wrapper>
            <Pagination {...{totalItemsCount, pageSize, currentPage, onPageChanged}} />
            {
                users.map(user =>
                    <User
                        key={ user.id }
                        {...{ user, unfollow, follow, followingInProgress }} />
                )
            }
        </Wrapper>
    )
}

export default Users;


const Wrapper = styled.div `
    padding-left: 50px;
`