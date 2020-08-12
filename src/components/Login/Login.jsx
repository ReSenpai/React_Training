import React from 'react';
import { Form, Field } from 'react-final-form'

const LoginForm = (props) => {
    return (
        <Form
            onSubmit={props.onSubmit}
            render={({ handleSubmit, submitting, pristine }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field
                        name="email"
                        component="input"
                        type="email"
                        placeholder="Login"
                        required
                        />
                    </div>
                    <div>
                        <Field
                        name="password"
                        component="input"
                        type="password"
                        placeholder="Password"
                        required
                        />
                    </div>
                    <div>
                        <label>Remember Me</label>
                        <Field name="rememberMe" component="input" type="checkbox" />
                    </div>
                    <div>
                        <button type="submit" disabled={submitting || pristine}>
                            Log in
                        </button>
                    </div>
                </form>
            )}
        />
    )
}

const Login = (props) => {

    const onSubmit = (data) => {
        props.sendAuthData(data);
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} />
        </div>
    );
}

export default Login;