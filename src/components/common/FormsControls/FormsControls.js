import React from 'react';
import classes from './FormsControls.module.css';

const FormControl = ({meta, input, element, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div>
            {React.createElement(element, {...input, ...props, 
                className: hasError && classes.borderError}, null)}
            {hasError && <span className={classes.error}>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    return (
        <FormControl
            {...props}
            element={'textarea'}
        />
    )
}

export const Input = (props) => {
    return (
        <FormControl
            {...props}
            element={'input'}
        />
    )
}