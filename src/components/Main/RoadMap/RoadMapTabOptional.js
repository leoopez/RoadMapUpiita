/** @format */

import React from "react";

import OptionalUnits from "./Units/RegularUnits";

export default function RoadMapTabOptional({
  units,
  info,
  group = "semester",
  order = false,
}) {
  const renderUnits = info[group].map(it => (
    <OptionalUnits
      key={it}
      units={units.filter(unit => unit[group] === it)}
      group={it}
    />
  ));

  if (order) renderUnits.reverse();
  return <div className='grid-container--center'>{renderUnits}</div>;
}
