/** @format */

import React from "react";
import NavLink from "./NavLink";

import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react/cjs/react.development";

import { Icon } from "../UI";
import { CAREERS } from "../../config";

import useClose from "../../hooks/useClose";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const ref = useClose(false, setOpen);

  return (
    <>
      <div className='navbar'>
        <NavLink to='/'>RoadMapUpiita</NavLink>
        <Icon onClick={() => setOpen(open => !open)}>
          {open ? <FaTimes size={"100%"} /> : <FaBars size={"100%"} />}
        </Icon>
      </div>
      <div ref={ref}>
        {open && (
          <nav className='navbar--active' onClick={() => setOpen(false)}>
            {CAREERS.map((item, i) => (
              <NavLink key={i} to={item}>
                {item}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </>
  );
}
