import React from 'react';
import { Form, Field } from 'react-final-form';
import { Form as FormBootsrap, Alert, Button } from 'react-bootstrap';
import { Input, Checkbox } from '../../../common/FormsControls/FormsControls';
import { composeValidators, requiredField, maxLengthCreator } from '../../../../utils/validators/validators';

const ProfileDataForm = ({profile, onSubmit, deactivateEditMode}) => {
    return (
        <Form
            initialValues={ profile } onSubmit={ onSubmit }
            render={({ handleSubmit, submitting, pristine, submitError}) => (
                <FormBootsrap onSubmit={ handleSubmit }>
                    <Button 
                        variant="primary" 
                        type="submit"
                        disabled={submitting || pristine}>
                        Save
                    </Button>
                    <Button
                        onClick={ deactivateEditMode } 
                        variant="primary">
                        Back
                    </Button>
                    {
                        submitError && 
                        <Alert variant='danger' >
                            { submitError }
                        </Alert>
                    }
                    <FormBootsrap.Group controlId="formBasicFullname">
                        <FormBootsrap.Label>Fullname</FormBootsrap.Label>
                        <Field
                            name="fullName"
                            component={ Input }
                            type="text"
                            placeholder="Full name"
                            required
                            validate={ composeValidators(requiredField, maxLengthCreator(60) ) }
                            />
                    </FormBootsrap.Group>
                    <FormBootsrap.Group controlId="formBasicCheckbox">
                        <Field 
                            name="lookingForAJob" 
                            component={ Checkbox } 
                            type="checkbox"
                            label="Looking For A Job?"
                            />
                    </FormBootsrap.Group>
                    <FormBootsrap.Group controlId="formBasicSkills">
                        <FormBootsrap.Label>Skills</FormBootsrap.Label>
                        <Field
                            name="lookingForAJobDescription"
                            component={ Input }
                            type="text"
                            placeholder="Skills"
                            />
                    </FormBootsrap.Group>
                    <FormBootsrap.Group controlId="formBasicAboutMe">
                        <FormBootsrap.Label>About Me</FormBootsrap.Label>
                        <Field
                            name="aboutMe"
                            component={ Input }
                            type="text"
                            placeholder="About Me"
                            />
                    </FormBootsrap.Group>
                    <FormBootsrap.Group>
                        <FormBootsrap.Label>Contacts: </FormBootsrap.Label>
                        <SocialMediaForm contacts={ profile.contacts } />
                    </FormBootsrap.Group>
                </FormBootsrap>
            )}
        />
    )
}

const SocialMediaForm = ({contacts}) => {

    return Object.keys(contacts).map(key => {
        return (
            <FormBootsrap.Group key={`formBasic${key}`} controlId={`formBasic${key}`}>
                <FormBootsrap.Label key={ key } >{ key }</FormBootsrap.Label>
                <Field
                key={`contacts.${key}`}
                name={`contacts.${key}`}
                component={ Input }
                type="text"
                placeholder={ key }
                />
            </FormBootsrap.Group>
        )
    })
}

export default ProfileDataForm;