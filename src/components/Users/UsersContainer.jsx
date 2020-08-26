import React, { useEffect } from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { follow, unfollow, requestUsers,getUsersAfterChanged} from '../../redux/users_reducer';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { 
    getPageSize, 
    getTotalUsersCount, 
    getCurrentPage, 
    getIsFetching, 
    getFollowingInProgress, 
    getUserSelector
} from '../../redux/users_selectors';

const UsersContainer = ({
    users,
    pageSize,
    totalUsersCount,
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

    const onPageChanged = (pageNumber) => {
        getUsersAfterChanged(pageNumber, pageSize);
    }

    return (
        <>
            { isFetching ? 
            <Preloader /> : 
            <Users
                {...{
                    totalUsersCount,
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

const mapStateToProps = (state) => {
    return {
        users: getUserSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        requestUsers,
        getUsersAfterChanged
    }),
    withAuthRedirect
)(UsersContainer);