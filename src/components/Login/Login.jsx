import React from 'react';
import { Form, Field } from 'react-final-form'
import { Input } from '../common/FormsControls/FormsControls';
import { requiredField } from '../../utils/validators/validators';

const Login = (props) => {

    const onSubmit = (data) => {
        console.log(data)
        props.login(data);
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} captcha={ props.captcha } />
        </div>
    );
}

const LoginForm = (props) => {
    return (
        <Form
            onSubmit={props.onSubmit}
            render={({ handleSubmit, submitting, pristine }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field
                        name="email"
                        component={ Input }
                        type="email"
                        placeholder="Login"
                        required
                        validate={ requiredField }
                        />
                    </div>
                    <div>
                        <Field
                        name="password"
                        component={ Input }
                        type="password"
                        placeholder="Password"
                        required
                        validate={ requiredField }
                        />
                    </div>
                    <div>
                        <label>Remember Me</label>
                        <Field 
                        name="rememberMe" 
                        component={ Input } 
                        type="checkbox" 
                        />
                    </div>
                    {
                        props.captcha && 
                        <div>
                            <img src={ props.captcha } alt="captcha"></img>
                            <Field 
                            name="captcha"
                            component={ Input }
                            type="text"
                            placeholder="Captcha"
                            required 
                            />
                        </div>   
                    }
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

export default Login;