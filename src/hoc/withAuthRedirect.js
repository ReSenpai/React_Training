import React from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Componet) => {

    const RedirectComponent = (props) => {
        if (!props.isAuth) return <Redirect to='/login' />
        return <Componet {...props} />
    }

    const connectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return connectedRedirectComponent;
}