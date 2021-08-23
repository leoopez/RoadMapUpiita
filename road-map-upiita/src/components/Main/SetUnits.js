/** @format */

import React from "react";
import "./SetUnits.css";

import Unit from "./Unit";

export default function SetUnits({ units, group }) {
  const renderUnits = units.map((unit, i) => <Unit key={i} unit={unit} />);
  return (
    <>
      <div className='group--number'>{group}</div>
      <div className='group'>{renderUnits}</div>
    </>
  );
}
