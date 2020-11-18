import React from 'react';
import Login from './Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../redux/auth_reducer';
import { Redirect } from 'react-router-dom';
import { getIsAuth, getCaptcha } from '../../redux/auth_selectors';
import { AppStateType } from '../../redux/redux_store';
import { LoginDataType } from '../../redux/auth_reducer';

type MapStatePropsType = {
    isAuth: boolean
    captcha: string | null
}

type MapDispatchPropsType = {
    login: (loginData: LoginDataType) => void
}

type OwnPropsType = {
    
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const LoginContainer: React.FC<PropsType> = ({login, isAuth, captcha}) => {

    const getLogin = (data: LoginDataType) => login(data);

    if (isAuth) return <Redirect to='/profile' />
    return (
        <Login 
        getLogin={ getLogin }
        captcha={ captcha } />
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: getIsAuth(state),
        captcha: getCaptcha(state)
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,{
        login
    })
)(LoginContainer);