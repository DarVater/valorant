import React from 'react';
import './NavSelect.css'

const NavSelect = ({children, options}) => {
    return (
        <div className="nav-select__dropdown">
            <button className="nav-select__dropbtn">
                {children}
                <div className="nav-select__menu"></div>
            </button>
            <div className="nav-select__dropdown-content">
                {options.map(item =>
                    <a key={item.url} href={item.url}>{item.name}</a>
                )}
            </div>
        </div>
    );
};

export default NavSelect;