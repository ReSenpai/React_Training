import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { MapDispatchPropsType, MapStatePropsType } from './ProfileContainer';
import styled from 'styled-components';


type OwnProps = {
    isOwner: boolean
}

export type PropsType = MapStatePropsType & MapDispatchPropsType & OwnProps;

const Profile: React.FC<PropsType> = (props) => {
    return (
        <Wrapper>
            <ProfileInfo 
                profile={ props.profile }
                status={ props.status }
                isOwner={ props.isOwner }
                updateUserStatus={ props.updateUserStatus }
                savePhoto={ props.savePhoto }
                updateProfile={ props.updateProfile } />
            <MyPostsContainer />
        </Wrapper>
    );
}

export default Profile;


const Wrapper = styled.div `
    padding: 20px;
`