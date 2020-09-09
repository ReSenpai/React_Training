import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth_reducer';
import { getIsAuth, getLogin } from '../../redux/auth_selectors';

const HeaderContainer = (props) => {

    return (
        <Header {...props} />
    );
}

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    login: getLogin(state)
})

export default connect(mapStateToProps, {
    logout
})(HeaderContainer);