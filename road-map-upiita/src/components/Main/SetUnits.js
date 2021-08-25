/** @format */

import React from "react";
import "./SetUnits.css";

import Unit from "./Unit";

import { useUnits } from "../../Hooks/unit-provider-hook";

export default function SetUnits({ units, group }) {
  const { currentUnit, linkedUnits, recommendedUnits } = useUnits();

  const renderUnits = units.map((unit, i) => (
    <Unit
      key={i}
      unit={unit}
      selected={currentUnit && unit.id === currentUnit}
      linked={currentUnit && linkedUnits.includes(unit.id)}
      recommended={currentUnit && recommendedUnits.includes(unit.id)}
    />
  ));
  return (
    <>
      <div className='group--number'>{group}</div>
      <div className='group'>{renderUnits}</div>
    </>
  );
}
