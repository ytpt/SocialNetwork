import React from 'react';
import { required } from '../utils/validators/validators';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../redux/auth-reducer';
import { reduxForm, Field } from 'redux-form';
import {createField, Input} from '../components/common/FormsControls/FormsControls';
import classes from '../components/common/FormsControls/FormsControls.module.css';

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit} className={classes.loginForm}>
            {createField('Email','email', [required], Input)}
            {createField('Password','password', [required],
                Input, {type: 'password'})}
            {createField(null,'rememberMe',null, Input,
                {type:'checkbox'}, 'remember me')}

            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && createField('Symbols from image','captcha',
                [required], Input, {} )}

            {error && <div className={classes.formSummaryError}>
                {error}
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
       props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(LoginComponent);