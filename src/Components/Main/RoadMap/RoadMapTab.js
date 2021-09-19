/** @format */

import React from "react";

import Units from "./Units/Units";
export default function RoadMapTabRegular({
  units,
  info,
  group = "semester",
  order = false,
  optional = false,
}) {
  const renderUnits = info[group].map(it => (
    <Units
      key={it}
      units={units.filter(unit => unit[group] === it)}
      group={it}
    />
  ));

  if (order) renderUnits.reverse();
  return <div className='grid-container--center'>{renderUnits}</div>;
}
