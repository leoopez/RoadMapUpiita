/** @format */

import React from "react";
import NavLink from "./NavLink";

import { FaBars } from "react-icons/fa";
import { useState } from "react/cjs/react.development";
import useClose from "../../custom-hooks/useClose";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const ref = useClose(false, setOpen);

  return (
    <nav ref={ref} className='navbar'>
      <NavLink to='Home' href='#' />
      <ul className='navbar--list'>
        <span
          className='icon--container'
          onClick={() => setOpen(open => !open)}>
          <FaBars />
        </span>
        {open && (
          <>
            <NavLink to='Upiita' href='https://www.upiita.ipn.mx' />
            <NavLink to='About' href='/' />
          </>
        )}
      </ul>
    </nav>
  );
}
