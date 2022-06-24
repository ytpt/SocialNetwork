import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return <header className={classes.header}>
        <img src='http://localhost:3000/img/logo.png' />
        <div className={classes.loginBlock}>
            { props.isAuth 
                ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={'/login/*'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;