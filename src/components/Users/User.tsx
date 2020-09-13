import React from 'react'; // we need this to make JSX compile
import userPhoto from '../../assets/images/anonimus.jpg'
import { NavLink } from 'react-router-dom';
import { UserType } from '../../types/types';
import styled from 'styled-components';

type PropsType = {
    user: UserType
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

const User: React.FC<PropsType> = ({
    user,
    unfollow,
    follow,
    followingInProgress
}) => {

    return ( 
        <Container key={ user.id }>
            <Wrapper>
                <NavLink to={`/profile/${user.id}`}>
                    <UserPhoto 
                        src={ user.photos.small
                            ? user.photos.small
                            : userPhoto } 
                        alt="user photo"
                    />
                </NavLink>
            </Wrapper>
            <UsernameContainer>
                <span>{ user.name }</span>
                <span>{ user.status }</span>
            </UsernameContainer>
            <div>
            { user.followed
                ? <Button 
                    disabled={ followingInProgress.some(id => id === user.id) }
                    onClick={ () => unfollow(user.id) }>Unsubscribe</Button>
                : <Button 
                    disabled={ followingInProgress.some(id => id === user.id) } 
                    onClick={ () => follow(user.id) }>Subscribe</Button>
            }
            </div>
        </Container>        
    )
}

export default User;


const Container = styled.div `
    display: flex;
    width: 350px;
    height: 75px;
    border-bottom: 1px solid var(--border);
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`

const Wrapper = styled.div ``

const UserPhoto = styled.img `
    width: 50px;
    height: 50px;
    border-radius: 50px;
`

const UsernameContainer = styled.div `
    display: flex;
    flex-direction: column;
`

const Button = styled.button `
    width: 88px;
    height: 32px;
    color: var(--links);
    font-size: inherit;
    padding: 0;
    border: 1px solid var(--links);
    background: none;
    border-radius: 9999px;
    margin: 5px;
    cursor: pointer;
    transition-duration: 0.2s;

    :hover {
        background-color: var(--orangeHover);
    }

    :active {
        transform: translateY(2px);
        transition: 0.2s;
        background-color: rgb(146, 125, 125);
    }

    :disabled {
        border-color: var(--border);
        color: var(--dimText);
    }
`