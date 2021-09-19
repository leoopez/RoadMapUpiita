/** @format */

import React from "react";

import { useUnits } from "./UnitProvider";
import useClose from "../../../../hooks/useClose";

import { FaFilePdf } from "react-icons/fa";

export default function Unit({ unit }) {
  const { selectedUnit } = useUnits();
  const selected = selectedUnit && unit.id === selectedUnit.id;
  return (
    <div
      className={`card level-${unit.level} optional-${unit?.optional}`}
      id={unit.id}>
      <FrontCard selected={selected} unit={unit} />
      <BackCard selected={selected} unit={unit} />
    </div>
  );
}

const FrontCard = ({ unit, selected }) => {
  const { selectedUnit, changeUnit } = useUnits();
  return (
    <div
      className={`flex-container flex-container--center front parent--space ${
        selected ? "selected" : ""
      }`}
      onClick={() => changeUnit(unit)}>
      {selectedUnit && selectedUnit.recommended.includes(unit.id) ? (
        <p className='recommended'>R</p>
      ) : null}
      {selectedUnit && selectedUnit.linked.includes(unit.id) ? (
        <p className='linked'>L</p>
      ) : null}
      <p>{unit.name}</p>
      <p>
        ({unit.hours[0]} , {unit.hours[1]})
      </p>
    </div>
  );
};

const BackCard = ({ selected, unit }) => {
  const { changeUnit } = useUnits();

  const ref = useClose(null, changeUnit);
  return (
    <div
      ref={ref}
      className={`flex-container flex-container--center back parent--space ${
        selected ? "selected-back" : ""
      }`}>
      <span className='icon--container icon--pdf'>
        <FaFilePdf size='100%' color='currentColor' />
      </span>
    </div>
  );
};
