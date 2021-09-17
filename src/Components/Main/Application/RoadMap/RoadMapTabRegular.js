/** @format */

import React from "react";

import RegularUnits from "./Units/RegularUnits";

import { useApplication } from "../ApplicationContext";

export default function RoadMapTabRegular({ units, info }) {
  const { group, order } = useApplication();

  const renderUnits = info[group].map(it => (
    <RegularUnits
      key={it}
      units={units.filter(unit => unit[group] === it)}
      group={it}
    />
  ));

  if (order) renderUnits.reverse();
  return <div className='grid-container--center'>{renderUnits}</div>;
}
