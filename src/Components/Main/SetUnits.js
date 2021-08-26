/** @format */

import React from "react";
import "./SetUnits.css";

import Unit from "./Unit";

import { optionalUnits } from "../../data/mecatronica/learningUnits";
import { useUnits } from "../../Hooks/unit-provider-hook";

export default function SetUnits({ units, group }) {
  const { currentUnit, linkedUnits, recommendedUnits } = useUnits();

  const optionalRenders =
    currentUnit?.optional && units.some(unit => unit.id === currentUnit.id)
      ? optionalUnits[currentUnit.optional - 1].map((unit, i) => (
          <Unit key={i} unit={unit} optional={true} />
        ))
      : null;

  const renderUnits = units.map((unit, i) => (
    <Unit
      key={i}
      unit={unit}
      selected={currentUnit && unit.id === currentUnit.id}
      linked={currentUnit && linkedUnits.includes(unit.id)}
      recommended={currentUnit && recommendedUnits.includes(unit.id)}
    />
  ));

  return (
    <>
      <div className='group--number'>{group}</div>
      <div className='group'>{renderUnits}</div>
      {optionalRenders && (
        <>
          <div className='group--number'>O{currentUnit.optional}</div>
          <div className='group'>{optionalRenders}</div>
        </>
      )}
    </>
  );
}
