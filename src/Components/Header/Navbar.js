/** @format */

import React from "react";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar--list'>
        <NavLink to='Home' href='#' />
        <NavLink to='Upiita' href='https://www.upiita.ipn.mx' />
        <NavLink to='About' href='/' />
      </ul>
    </nav>
  );
}
