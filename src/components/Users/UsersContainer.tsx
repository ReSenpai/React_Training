import React, { useEffect } from 'react';
import Users from './Users';
import { follow, unfollow, requestUsers,getUsersAfterChanged} from '../../redux/users_reducer';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { 
    getPageSize, 
    getTotalItemsCount, 
    getCurrentPage, 
    getIsFetching, 
    getFollowingInProgress, 
    getUserSelector
} from '../../redux/users_selectors';
import { UserType } from '../../types/types';
import { AppStateType } from '../../redux/redux_store';

type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalItemsCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number> // Array of users id
}

type MapDispatchPropsType = {
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    requestUsers: (page: number, pageSize: number) => void
    getUsersAfterChanged: (pageNumber: number, pageSize: number) => void
}

type OwnPropsType = {
    // directly abandoned props
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const UsersContainer: React.FC<PropsType> = ({
    users,
    pageSize,
    totalItemsCount,
    currentPage,
    isFetching,
    followingInProgress,
    follow,
    unfollow,
    requestUsers,
    getUsersAfterChanged
}) => {

    useEffect(() => {
        requestUsers(currentPage, pageSize);
    }, [currentPage])

    const onPageChanged = (pageNumber: number) => {
        getUsersAfterChanged(pageNumber, pageSize);
    }

    return (
        <>
            { isFetching ? 
            <Preloader /> : 
            <Users
                {...{
                    totalItemsCount,
                    pageSize,
                    currentPage,
                    users,
                    onPageChanged,
                    unfollow,
                    follow,
                    followingInProgress
                }} /> 
            }  
        </>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUserSelector(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalItemsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
        follow,
        unfollow,
        requestUsers,
        getUsersAfterChanged
    }),
    withAuthRedirect
)(UsersContainer);