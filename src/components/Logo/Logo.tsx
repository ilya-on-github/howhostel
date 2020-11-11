import React from 'react';
import './Logo.scss';

import logo from "../../assets/logo/How_Hostel.svg";

const Logo = () => {
    return (
        <a className="Logo" href="/">
            <img src={logo} alt="logo"/>
        </a>
    );
}

export default Logo;
