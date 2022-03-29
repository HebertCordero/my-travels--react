import React from "react";
import logo from "../img/icon_globe.svg";

export default function Navbar() {
    return(
        <nav className="navbar">
            <img className="navbar--logo" src={logo} alt="logo"/>
            <h1 className="navbar--h1">MyTravels</h1>
        </nav>
    )
}