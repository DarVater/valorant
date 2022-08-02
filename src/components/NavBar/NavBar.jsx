import React from 'react';
import imgCompany from "../../img/header/company.svg";
import imgLogo from "../../img/header/logo.svg";
import './NavBar.css'
import NavSelect from "../UI/NavSelect/NavSelect";
import NavButton from "../UI/NavButton/NavButton";
const NavBar = () => {
    const optionsNews = [
        {url: 'profile', name: 'TRADE'},
        {url: 'friends', name: 'ARENA'},
        {url: 'logout', name: 'UPDATE'},
    ]
    const optionsDiscover = [
        {url: 'guns', name: 'GUNS'},
        {url: 'locations', name: 'LOCATIONS'},
        {url: 'cards', name: 'CARDS'},
        {url: 'box', name: 'BOX'},
    ]
    return (
        <div className="navbar">
            <div className="navbar__logos">
                <div className="navbar__company">
                    <img src={imgCompany} alt="img company"/>
                </div>
                <div className="navbar__logo">
                    <img src={imgLogo} alt="img logo"/>
                </div>
            </div>
            <ul className="navbar__menu">
                <li>
                    <NavButton>GAME</NavButton>
                </li>
                <li>
                    <NavButton>CHAMPIONS</NavButton>
                </li>
                <li>
                    <NavSelect options={optionsNews}>
                        NEWS
                    </NavSelect>
                </li>
                <li>
                    <NavButton>PATCH NOTES</NavButton>
                </li>
                <li >
                    <NavSelect options={optionsDiscover}>
                        DISCOVER
                    </NavSelect>
                </li>
                <li>
                    <NavButton>ESPORTS</NavButton>
                </li>
                <li>
                    <NavButton>UNIVERSE</NavButton>
                </li>
                <li>
                    <NavButton>SHOP</NavButton>
                </li>
                <li>
                    <NavButton>SUPPORT</NavButton>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;