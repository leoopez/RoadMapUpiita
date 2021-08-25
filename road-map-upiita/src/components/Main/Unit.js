/** @format */

import React from "react";
import "./Unit.css";

import { useUnits } from "../../Hooks/unit-provider-hook";

export default function Unit({ unit, selected, linked, recommended }) {
  const { changeCurrentUnits } = useUnits();
  // console.log(unit);
  return (
    <div
      className={`unit level--${unit.level} ${selected ? "selected" : ""}`}
      onClick={() => changeCurrentUnits(unit)}>
      {recommended ? <p className='recommended'>R</p> : null}
      {linked ? <p className='linked'>L</p> : null}
      <p>{unit.name}</p>
      <p>
        ({unit.credits[0]},{unit.credits[1]})
      </p>
    </div>
  );
}
