import React from 'react';
import Login from './Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../redux/auth_reducer';
import { Redirect } from 'react-router-dom';

const LoginContainer = ({login, isAuth, captcha}) => {

    const getLogin = (data) => login(data);

    if (isAuth) return <Redirect to='/profile' />
    return (
        <Login 
        getLogin={ getLogin }
        captcha={ captcha } />
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    }
}

export default compose(
    connect(mapStateToProps,{
        login
    })
)(LoginContainer);