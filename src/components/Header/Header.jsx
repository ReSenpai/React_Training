import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <img src='https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png' alt='logo'></img>
        </header>
    );
}

export default Header;