import React from 'react';
import classes from '../../common/FormsControls/FormsControls.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field 
                    component={Textarea}
                    validate={ [required, maxLength50] } 
                    placeholder='Enter your text' name='newMessageBody' />
            </div>
            <button className={classes.sendBtn}>Send</button>
        </form>
    )
}
    
export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm);
