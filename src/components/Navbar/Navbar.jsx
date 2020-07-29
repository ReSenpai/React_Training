import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink activeClassName={style.active} to='/profile'>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink activeClassName={style.active} to='/messages'>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink activeClassName={style.active} to='/news'>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink activeClassName={style.active} to='/music'>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink activeClassName={style.active} to='/users'>Users</NavLink>
            </div>
            <div className={style.item}>
                <NavLink activeClassName={style.active} to='/setting'>Setting</NavLink>
            </div>
            <div className={ style.friends }>
                <Friends />
            </div>
        </nav>
    );
}

export default Navbar;