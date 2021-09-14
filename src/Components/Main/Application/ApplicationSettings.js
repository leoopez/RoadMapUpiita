/** @format */
import React, { useState } from "react";

import useClose from "../../../custom-hooks/useClose";

import { CAREERS, GROUP_BY, ORDER_BY } from "../../../config";
import { useApplication } from "./ApplicationContext";

import {
  FaAngleDoubleDown,
  FaAngleDoubleUp,
  FaChevronRight,
  FaUniversity,
  FaSort,
  FaExchangeAlt,
} from "react-icons/fa";

export default function AplicationSettings() {
  const [open, setOpen] = useState(false);
  const ref = useClose(false, setOpen);
  const {
    career,
    group,
    order,
    triggerActionCareer,
    triggerActionGroup,
    triggerActionOrder,
  } = useApplication();

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
          <NavItem
            icon={<FaUniversity size={"100%"} />}
            dd={CAREERS}
            changeState={triggerActionCareer}>
            Carrera: {career}
          </NavItem>
          <NavItem
            icon={<FaSort size={"100%"} />}
            dd={GROUP_BY}
            changeState={triggerActionGroup}>
            Agrupar por: {group}
          </NavItem>
          <NavItem
            icon={<FaExchangeAlt size={"100%"} />}
            dd={ORDER_BY}
            changeState={triggerActionOrder}>
            Ordenar por: {order}
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

function NavItem({ icon, children, dd, changeState = f => f }) {
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

      {open && <DropDown dd={dd} changeState={changeState} />}
    </li>
  );
}

function DropDown({ dd, changeState = f => f }) {
  return (
    <ul className='nav--secundary'>
      {dd.map((item, id) => (
        <DropItem key={id} item={item} changeState={changeState} />
      ))}
    </ul>
  );
}

function DropItem({ item, changeState = f => f }) {
  return (
    <li
      className='flex-container flex-container--center nav-item'
      onClick={() => changeState(item)}>
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
