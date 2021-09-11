/** @format */

import React from "react";

import SettingsDropdown from "./SettingsDropdown";
import { FaUniversity, FaSort, FaExchangeAlt } from "react-icons/fa";

import { CSSTransition } from "react-transition-group";

const careers = ["Mecatronica", "Telematica", "Bionica"];
const groupBy = ["semester", "level"];
const orderBy = ["M-m", "m-M"];

export default function NavbarSettings({
  career,
  changeCareer,
  group,
  changeGroup,
  order,
  changeOrder,
}) {
  return (
    <nav className='settings'>
      <ul className='nav__settings'>
        <SettingsDropdown
          mode={career}
          changeMode={changeCareer}
          options={careers}
          Iconleft={<FaUniversity />}>
          <b>Carrera: </b>
        </SettingsDropdown>
        <SettingsDropdown
          mode={group}
          changeMode={changeGroup}
          options={groupBy}
          Iconleft={<FaSort />}>
          <b>Agrupar por: </b>
        </SettingsDropdown>
        <SettingsDropdown
          mode={order}
          changeMode={changeOrder}
          options={orderBy}
          Iconleft={<FaExchangeAlt />}>
          <b>Ordenar por: </b>
        </SettingsDropdown>
      </ul>
    </nav>
  );
}
