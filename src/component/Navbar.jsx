import React from 'react';
import reactLogo from "../assets/react.svg"

import "./App.css";

function Navbar () {
    return(
        <nav>
            <img src={reactLogo} alt='react-logo' className='nav-img' />
            <h3 className='logo-text'>ReactFacts</h3>
            <h4 className='nav-title'>React Course - Project 1</h4>
        </nav>
       
    )
}

export default Navbar;