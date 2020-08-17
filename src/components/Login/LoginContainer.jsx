import React from 'react';
import Login from './Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../redux/auth_reducer';
import { Redirect } from 'react-router-dom';

class LoginContainer extends React.Component {

    login = (data) => {
        this.props.login(data);
    }

    render () {
        if (this.props.isAuth) return <Redirect to='/profile' />
        return (
            <Login 
            login={ this.login }
            captcha={ this.props.captcha } />
        )
    }
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