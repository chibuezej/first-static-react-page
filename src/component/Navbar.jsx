import React from 'react';
import reactLogo from "../assets/react.svg"

import "./App.css";

function Navbar (props) {
    console.log(props)
    return(
        <nav className={props.darkMode ? "dark" : ""}>
            <img src={reactLogo} alt='react-logo' className='nav-logo-icon' />
            <h3 className='logo-text'>ReactFacts</h3>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
       
    )
}

export default Navbar;