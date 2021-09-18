/** @format */

import React from "react";
import NavLink from "./NavLink";

import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react/cjs/react.development";
import useClose from "../../custom-hooks/useClose";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const ref = useClose(false, setOpen);

  return (
    <>
      <div className='navbar'>
        <NavLink to='/'>RoadMapUpiita</NavLink>
        <span
          className='icon--container'
          onClick={() => setOpen(open => !open)}>
          {open ? <FaTimes size={"100%"} /> : <FaBars size={"100%"} />}
        </span>
      </div>
      <div ref={ref}>
        {open && (
          <nav className='navbar--active' onClick={() => setOpen(false)}>
            <NavLink to='' />
          </nav>
        )}
      </div>
    </>
  );
}
