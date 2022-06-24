import React from 'react';
import { NavLink } from 'react-router-dom';
import UsersContainer from '../../Users/UsersContainer';
import Friends from '../Friends/Friends';
import classes from './Navbar.module.css';

let classesNew = `${classes.item} ${classes.active}`;

const Navbar = (props) => {

    return (
        <nav className={classes.nav}>
            <div>
                <NavLink to='/profile' className = { navData => navData.isActive ? classes.active : classes.item }>
                    Profile
                </NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className = { navData => navData.isActive ? classes.active : classes.item }>
                    Messages
                </NavLink>
            </div>
            <div>
                <NavLink to='/news' className = { navData => navData.isActive ? classes.active : classes.item }>
                    News
                </NavLink>
            </div>
            <div>
                <NavLink to='/music' className = { navData => navData.isActive ? classes.active : classes.item }>
                    Music
                </NavLink>
            </div>
            <div>
                <NavLink to='/settings' className = { navData => navData.isActive ? classes.active : classes.item }>
                    Settings
                </NavLink>
            </div>
            <div>
                <NavLink to='/users' className = { navData => navData.isActive ? classes.active : classes.item }>
                    Users
                </NavLink>
            </div>
            <div>
                <NavLink to='/friends' className = { navData => navData.isActive ? classes.active : classes.item }>
                    <Friends />
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;