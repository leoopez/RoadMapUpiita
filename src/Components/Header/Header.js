/** @format */

import React from "react";
import "./Header.css";

import Navbar from "./Navbar";

import logo from "../../static/img/logoUpiita.png";

export default function Header() {
  return (
    <header className='header'>
      <div className='logos'>
        <img className='logo--ipn' src={logo} alt='logo' />
      </div>
      <div className='names'>
        <h1>Mapa Curricular</h1>
      </div>
      <Navbar />
    </header>
  );
}
