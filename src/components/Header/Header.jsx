import React from 'react';
import './Header.css'
import imgAvatar from '../../img/header/avatar.jpg'
import NavSelect from '../UI/NavSelect/NavSelect'
import NavBar from "../NavBar/NavBar";

const Header = () => {
    const optionsAccount = [
        {url: 'profile', name: 'PROFILE'},
        {url: 'settings', name: 'SETTINGS'},
        {url: 'friends', name: 'FRIENDS'},
        {url: 'logout', name: 'LOGOUT'},
    ]
    return (
        <header className="header  _container">
            <div className="header__container">
                <div>
                    <NavBar></NavBar>
                </div>

                <div className="header__account">
                    <NavSelect options={optionsAccount}>
                        <div className="header__account-avatar">
                            <img src={imgAvatar} alt="account-avatar"/>
                        </div>
                        <div className="header__account-name">BILCKO</div>
                    </NavSelect>
                </div>
            </div>
        </header>
    );
};

export default Header;