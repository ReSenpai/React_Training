import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import { ReactComponent as NewsIcon } from '../../assets/icons/news.svg'
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile.svg'
import { ReactComponent as MessagesIcon } from '../../assets/icons/messages.svg'
import { ReactComponent as MusicIcon } from '../../assets/icons/music.svg'
import { ReactComponent as UsersIcon } from '../../assets/icons/users.svg'
import { ReactComponent as SettingIcon } from '../../assets/icons/setting.svg'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <NavLink activeClassName={style.active} className={style.item} to='/profile'>
                <ProfileIcon className={style.icons} />
                <span>Profile</span>
            </NavLink>
            <NavLink activeClassName={style.active} className={style.item} to='/messages'>
                <MessagesIcon className={style.icons} />
                <span>Messages</span>
            </NavLink>
            <NavLink activeClassName={style.active} className={style.item} to='/news'>
                <NewsIcon className={style.icons} />
                <span>News</span>
            </NavLink>
            <NavLink activeClassName={style.active} className={style.item} to='/music'>
                <MusicIcon className={style.icons} />
                <span>Music</span>
            </NavLink>
            <NavLink activeClassName={style.active} className={style.item} to='/users'>
                <UsersIcon className={style.icons} />
                <span>Users</span>
            </NavLink>
            <NavLink activeClassName={style.active} className={style.item} to='/setting'>
                <SettingIcon className={style.icons} />
                <span>Setting</span>
            </NavLink>
            <div className={style.friends}>
                <Friends />
            </div>
        </nav>
    );
}

export default Navbar;