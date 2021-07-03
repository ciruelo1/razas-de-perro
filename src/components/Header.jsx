import React from 'react';
import "../assets/css/Header.css";
import dogicon from "../assets/img/dogicon.png";

const Header = () => (
    <div className="header">
        <img src={dogicon} alt="dogicon"/>
        <h1>Razas de Perro</h1>
    </div>
);

export default Header;