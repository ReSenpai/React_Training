import React, { useEffect } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { 
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    savePhoto,
    updateProfile
} from '../../redux/profile_reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getProfile, getStatus } from '../../redux/profile_selectors';
import { getUserId } from '../../redux/auth_selectors';

const ProfileContainer = (props) => {

    let userId = props.match.params.userId || props.authorizedUserId;

    useEffect(() => {
        if (props.profile && userId === props.profile.userId) return;
        props.getUserProfile(userId);
        props.getUserStatus(userId);
    }, [userId]);


    return (
        <Profile { ...props } isOwner={!props.match.params.userId} />
    )
}


const mapStateToProps = (state) => {
    return ({
        profile: getProfile(state),
        authorizedUserId: getUserId(state),
        status: getStatus(state)
    });
}

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus, 
        savePhoto,
        updateProfile
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);