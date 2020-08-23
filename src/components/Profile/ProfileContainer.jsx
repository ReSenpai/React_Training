import React, { useEffect } from 'react';
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

const ProfileContainer = (props) => {

    let userId = props.match.params.userId || props.authorizedUserId;

    useEffect(() => {
        if (props.profile && userId === props.profile.userId) return;
        props.getUserProfile(userId);
        props.getUserStatus(userId);
    }, [userId]);
      
    return (
        <Profile { ...props } />
    )
}


const mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
        authorizedUserId: state.auth.userId,
        status: state.profilePage.status
    });
}

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);