import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import headerPhoto from '../../assets/images/logo.png'

const Header = (props) => {
    return <header className={classes.header}>
        <img src={headerPhoto} />
        <div className={classes.loginBlock}>
            { props.isAuth 
                ? <div className={classes.myLogin}>{props.login}   <button
                    onClick={props.logout}
                    className={classes.loginBtn}>Logout
                    </button>
                </div>
                : <NavLink to={'/login/*'}>
                    <button className={classes.loginBtn}>Login</button>
                </NavLink> }
        </div>
    </header>
}

export default Header;