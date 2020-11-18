import React from 'react';
import styles from './FormControls.module.css';
import { Form } from 'react-bootstrap';

const Element = (Element: any) => ({ input, meta: {touched, error}, ...props }: any) => {
    
    const hasError = touched && error;
    
    return (
        <div className={ styles.formControl + " " + (hasError && styles.error) }>
            <div>
                <Element {...input} {...props} />
            </div>
            <div>
                { hasError 
                && <Form.Text className={`text-muted ${styles.errorText}`}>{ error }</Form.Text> 
                }
            </div>
        </div>
    );
};


export const Textarea = Element('textarea');
export const Input = Element(Form.Control);
export const Checkbox = Element(Form.Check);