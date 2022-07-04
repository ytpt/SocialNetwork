import React from 'react';
import { required } from '../utils/validators/validators';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../redux/auth-reducer';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../components/common/FormsControls/FormsControls';
import classes from '../components/common/FormsControls/FormsControls.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field 
                    placeholder={'Email'} name={'email'} 
                    validate={[required]} component={Input} />
            </div>
            <div>
                <Field 
                    placeholder={'Password'} name={'password'} 
                    validate={[required]} component={Input} type={'password'} />
            </div>
            <div>
                <Field 
                    type={'checkbox'} name={'rememberMe'} component={Input} />
                    remember me
            </div>
            {props.error && <div className={classes.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button className={classes.addBtn}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const LoginComponent = (props) => {
    const onSubmit = (formData) => {
       props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, null)(LoginComponent);