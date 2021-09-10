/** @format */
import React from "react";
import SettingsDropdown from "./SettingsDropdown";

import "./UnitsSetttings.css";

import { FaUniversity, FaSort, FaExchangeAlt } from "react-icons/fa";

const careers = ["Mecatronica", "Telematica", "Bionica"];
const groupBy = ["semester", "level"];
const orderBy = ["M-m", "m-M"];

export default function UnitsSettings({
  career,
  changeCareer,
  order,
  changeOrder,
  group,
  changeGroup,
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
