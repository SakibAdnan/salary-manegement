import React from 'react';
import logo from '../../logo.svg';
import './Header.css';
const Header = () => {
    
    return (
        <div className="header-area">
            <div className="header-left">
                 <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="header-right">
            </div>
        </div>
    );
};

export default Header;