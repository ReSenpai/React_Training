import React from 'react';
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
    getUsers, 
    getPageSize, 
    getTotalUsersCount, 
    getCurrentPage, 
    getIsFetching, 
    getFollowingInProgress 
} from '../../redux/users_selectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);  
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersAfterChanged(pageNumber, this.props.pageSize);
    }

    render() {
        return (
            <>
                { this.props.isFetching ? 
                <Preloader /> : 
                <Users
                    totalUsersCount={ this.props.totalUsersCount }
                    pageSize={ this.props.pageSize }
                    currentPage={ this.props.currentPage }
                    users={ this.props.users }
                    onPageChanged={ this.onPageChanged }
                    unfollow={ this.props.unfollow }
                    follow={ this.props.follow }
                    followingInProgress={ this.props.followingInProgress } /> 
                }  
            </>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }
const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
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