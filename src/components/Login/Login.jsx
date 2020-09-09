import React from 'react';
import { Form, Field } from 'react-final-form'
import { Input, Checkbox } from '../common/FormsControls/FormsControls';
import { requiredField } from '../../utils/validators/validators';
import { Form as FormBootsrap, Alert, Button } from 'react-bootstrap';

const Login = ({getLogin, captcha}) => {

    const onSubmit = (data) => getLogin(data);

    return (
        <div>
            <h1>Login</h1>
            <LoginForm 
                onSubmit={ onSubmit } 
                captcha={ captcha } />
        </div>
    );
}

const LoginForm = ({onSubmit, captcha}) => {
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, submitting, pristine, submitError }) => (
                <FormBootsrap onSubmit={handleSubmit}>
                    <FormBootsrap.Group controlId="formBasicEmail">
                        <Field
                            name="email"
                            component={ Input }
                            type="email"
                            placeholder="Login"
                            required
                            validate={ requiredField }
                            />
                    </FormBootsrap.Group>

                    <FormBootsrap.Group controlId="formBasicPassword">
                        <Field
                            name="password"
                            component={ Input }
                            type="password"
                            placeholder="Password"
                            required
                            validate={ requiredField }
                            />
                    </FormBootsrap.Group>
                    <FormBootsrap.Group controlId="formBasicCheckbox">
                        <Field 
                            name="rememberMe" 
                            component={ Checkbox } 
                            type="checkbox"
                            label="Remember Me"
                            />
                    </FormBootsrap.Group>
                    {
                        captcha && 
                        <div>
                            <img src={ captcha } alt="captcha"></img>
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
                        <Button 
                            variant="primary" 
                            type="submit"
                            disabled={submitting || pristine}>
                            Log in
                        </Button>
                    </div>
                    {
                        submitError && 
                        <Alert variant='danger' >
                            { submitError }
                        </Alert>
                    }
                </FormBootsrap>
            )}
        />
    )
}

export default Login;