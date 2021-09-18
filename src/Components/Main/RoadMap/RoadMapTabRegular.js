/** @format */

import React from "react";

import RegularUnits from "./Units/RegularUnits";
import RenderUnitsOffScreen from "./Units/RenderUnitsOffScreen";
export default function RoadMapTabRegular({
  units,
  info,
  group = "semester",
  order = false,
}) {
  const renderUnits = info[group].map(it => (
    <RegularUnits
      key={it}
      units={units.filter(unit => unit[group] === it)}
      group={it}
    />
  ));

  if (order) renderUnits.reverse();
  return (
    <>
      <div className='grid-container--center'>{renderUnits}</div>
      <RenderUnitsOffScreen />
    </>
  );
}
