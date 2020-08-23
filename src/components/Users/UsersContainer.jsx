import React, { useEffect } from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { 
    follow, 
    unfollow, 
    setCurrentPage, 
    toggleFollowingProgress,
    requestUsers,
    getUsersAfterChanged
} from '../../redux/users_reducer';
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

const UsersContainer = (props) => {

    useEffect(() => {
        props.requestUsers(props.currentPage, props.pageSize);
    }, [props.currentPage])

    const onPageChanged = (pageNumber) => {
        props.getUsersAfterChanged(pageNumber, props.pageSize);
    }

    return (
        <>
            { props.isFetching ? 
            <Preloader /> : 
            <Users
                totalUsersCount={ props.totalUsersCount }
                pageSize={ props.pageSize }
                currentPage={ props.currentPage }
                users={ props.users }
                onPageChanged={ onPageChanged }
                unfollow={ props.unfollow }
                follow={ props.follow }
                followingInProgress={ props.followingInProgress } /> 
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
        setCurrentPage,
        toggleFollowingProgress,
        requestUsers,
        getUsersAfterChanged
    }),
    withAuthRedirect
)(UsersContainer);