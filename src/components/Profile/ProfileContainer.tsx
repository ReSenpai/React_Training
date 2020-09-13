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
import { ProfileType } from '../../types/types';
import { AppStateType } from '../../redux/redux_store';

export type MapStatePropsType = {
    profile: ProfileType | null
    authorizedUserId: number | null
    status: string
}

export type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    savePhoto: (file: string) => void
    updateProfile: (profile: ProfileType) => void | any
}

type OwnPropsType = {
    match: any
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const ProfileContainer: React.FC<PropsType> = (props) => {

    let userId = props.match.params.userId || props.authorizedUserId;

    useEffect(() => {
        if (props.profile && userId === props.profile.userId) return;
        props.getUserProfile(userId);
        props.getUserStatus(userId);
    }, [userId]);


    return (
        <Profile { ...props } isOwner={ !props.match.params.userId } />
    )
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return ({
        profile: getProfile(state),
        authorizedUserId: getUserId(state),
        status: getStatus(state)
    });
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus, 
        savePhoto,
        updateProfile
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);