import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { 
    getUserProfile,
    getUserStatus,
    updateUserStatus
} from '../../redux/profile_reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = this.props.authorizedUserId;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render () { 
        return (
            <Profile { ...this.props } />
        )
    } 
}


const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    authorizedUserId: state.auth.userId,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);