import React from 'react';
import Users from './Users';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { 
    follow, 
    unfollow, 
    setUsers, 
    setCurrentPage, 
    setTotalUsersCount, 
    toggleIsFetching 
} from '../../redux/users_reducer';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        .then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        });  
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        if (pageNumber > 0) {
            usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
            });
        } 
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
                    follow={ this.props.follow } /> 
                }  
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching  
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer);