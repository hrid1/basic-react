// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div className='header'>

            <img src={logo} alt="logo" />

            <nav>
               {/* a*4[href=$]{$} */}
               <a href="1">Home</a>
               <a href="2">Login</a>
               <a href="3">Blog</a>
               <a href="4">Login</a>
            </nav>
            
        </div>
    );
};

export default Header;