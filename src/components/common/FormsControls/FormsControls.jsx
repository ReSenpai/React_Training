import React from 'react';
import styles from './FormControls.module.css';
import { Form } from 'react-bootstrap';

const Element = Element => ({ input, meta, ...props }) => {
    
    const hasError = meta.touched && meta.error;
    
    return (
        <div className={ styles.formControl + " " + (hasError && styles.error) }>
            <div>
                <Element {...input} {...props} />
            </div>
            <div>
                { hasError 
                && <Form.Text className={`text-muted ${styles.errorText}`}>{ meta.error }</Form.Text> 
                }
            </div>
        </div>
    );
};


export const Textarea = Element('textarea');
export const Input = Element(Form.Control);