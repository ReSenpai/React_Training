import React from 'react';
import Login from './Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getAuthorization } from '../../redux/auth_reducer';
import { Redirect } from 'react-router-dom';

class LoginContainer extends React.Component {

    sendAuthData = (data) => {
        this.props.getAuthorization(data);
    }

    render () {
        if (this.props.isAuth) return <Redirect to={`profile`} />
        return (
            <Login sendAuthData={ this.sendAuthData } />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps,{
        getAuthorization
    })
)(LoginContainer);