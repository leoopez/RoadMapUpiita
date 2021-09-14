/** @format */

import React from "react";

import RoadMapUnit from "./RoadMapUnit";

import { useUnits } from "../../../../contexts/unit-provider/unit-provider-hook";

export default function Units({ units, group, career }) {
  const { currentUnit, linkedUnits, recommendedUnits } = useUnits();

  const renderUnits = units.map((unit, i) => (
    <RoadMapUnit
      key={i}
      unit={unit}
      selected={currentUnit && unit.id === currentUnit.id}
      linked={currentUnit && linkedUnits.includes(unit.id)}
      recommended={currentUnit && recommendedUnits.includes(unit.id)}
    />
  ));

  return (
    <>
      <div className='group--number flex-container flex-container--center'>
        {group}
      </div>
      <div className='flex-container flex-container--center'>{renderUnits}</div>
    </>
  );
}
