import React from 'react';
import classes from './FormsControls.module.css';
import {Field} from "redux-form";

const FormControl = ({meta: {touched, error}, input, element, ...props}) => {
    const hasError = touched && error;

    return (
        <div>
            {React.createElement(element, {...input, ...props, 
                className: hasError && classes.borderError}, null)}
            {hasError && <span className={classes.error}>{error}</span>}
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

export const createField = (
    placeholder, name, validators, component, props = {}, text= '') => (
     <div>
         <Field
             placeholder={placeholder}
             name={name}
             validate={validators}
             component={component}
             {...props}
         /> {text}
     </div>

)