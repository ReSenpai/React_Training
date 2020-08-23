import React from 'react';
import Login from './Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../redux/auth_reducer';
import { Redirect } from 'react-router-dom';

const LoginContainer = (props) => {

    const login = (data) => props.login(data);

    if (props.isAuth) return <Redirect to='/profile' />
    return (
        <Login 
        login={ login }
        captcha={ props.captcha } />
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