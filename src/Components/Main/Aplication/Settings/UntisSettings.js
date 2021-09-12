/** @format */
import React, { useState } from "react";

import useClose from "../../../../custom-hooks/useClose";

import {
  FaAngleDoubleDown,
  FaAngleDoubleUp,
  FaChevronRight,
  FaUniversity,
  FaSort,
  FaExchangeAlt,
} from "react-icons/fa";

const careers = ["Mecatronica", "Telematica", "Bionica"];
const groupBy = ["semester", "level"];
const orderBy = ["M-m", "m-M"];

export default function UnitsSettings() {
  const [open, setOpen] = useState(false);
  const ref = useClose(false, setOpen);

  return (
    <div className='settings--container' ref={ref}>
      <span
        className='icon--container icon'
        onClick={() => setOpen(open => !open)}>
        {open ? (
          <FaAngleDoubleUp size={"100%"} />
        ) : (
          <FaAngleDoubleDown size={"100%"} />
        )}
      </span>
      {open && (
        <Navbar>
          <NavItem icon={<FaUniversity size={"100%"} />} dd={careers}>
            Carrera:
          </NavItem>
          <NavItem icon={<FaSort size={"100%"} />} dd={groupBy}>
            Agrupar por:
          </NavItem>
          <NavItem icon={<FaExchangeAlt size={"100%"} />} dd={orderBy}>
            Ordenar por:
          </NavItem>
        </Navbar>
      )}
    </div>
  );
}

function Navbar({ children }) {
  return (
    <nav className='settings'>
      <ul className='nav'>{children}</ul>
    </nav>
  );
}

function NavItem({ icon, children, dd }) {
  const [open, setOpen] = useState(false);
  return (
    <li
      className='flex-container flex-container--center nav-item'
      onClick={() => setOpen(open => !open)}>
      <span className='icon--container icon--button'>{icon}</span>
      <span className='nav--text'>{children}</span>
      <span className='icon--container icon--button icon--left'>
        {<FaChevronRight size='100%' />}
      </span>

      {open && <DropDown dd={dd} />}
    </li>
  );
}

function DropDown({ dd }) {
  return (
    <ul className='nav--secundary'>
      {dd.map(item => (
        <DropItem item={item} />
      ))}
    </ul>
  );
}

function DropItem({ item }) {
  return (
    <li className='flex-container flex-container--center nav-item'>
      <span className='icon--container icon--button'>
        <FaAngleDoubleUp size={"100%"} />
      </span>
      <span className='nav--text'>{item}</span>
      <span className='icon--container icon--button icon--left'>
        {<FaChevronRight size='100%' />}
      </span>
    </li>
  );
}
