import React from 'react';
import Login from './Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getAuthorization } from '../../redux/auth_reducer';

class LoginContainer extends React.Component {

    sendAuthData = (data) => {
        this.props.getAuthorization(data);
    }

    render () {
        return (
            <Login sendAuthData={ this.sendAuthData } />
        )
    }
}

const mapStateToProps = () => {
    return {

    }
}

export default compose(
    connect(mapStateToProps,{
        getAuthorization
    })
)(LoginContainer);