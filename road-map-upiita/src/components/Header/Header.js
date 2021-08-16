import React from "react"
import "./Header.css"

import logo from "../../static/img/logoIPN.png";

export default function Header() {
    return (
        <div className="header">
            <div className="logos">
                <img className="logo--ipn" src={logo} alt="logo"/>
            </div>
            <div className="names">
                <h1>Mapa Curricular</h1>
            </div>
        </div>
    )
}