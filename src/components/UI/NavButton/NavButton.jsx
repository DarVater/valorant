import React from 'react';
import './NavButton.css'

const NavButton = ({children}) => {
    return (
        <div className="nav-button">
            {children}
        </div>
    );
};

export default NavButton;