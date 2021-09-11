/** @format */
import React, { useState } from "react";

import NavbarSettings from "./NavbarSettings";

import "./UnitsSetttings.css";
import useClose from "../../../../hooks/useClose";

import { FaChevronDown } from "react-icons/fa";

export default function Settings(props) {
  const [open, setOpen] = useState(false);
  const ref = useClose();

  return (
    <>
      <span
        className='icon--container icon'
        onClick={() => setOpen(open => !open)}
        ref={ref}>
        <FaChevronDown />
      </span>
      {open && <NavbarSettings props={props} />}
    </>
  );
}
