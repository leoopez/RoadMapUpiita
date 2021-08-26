/** @format */

import React from "react";
import "./Unit.css";

import { useUnits } from "../../Hooks/unit-provider-hook";

export default function Unit({
  unit,
  selected = false,
  linked = false,
  recommended = false,
  optional = false,
}) {
  const { changeCurrentUnits } = useUnits();

  return (
    <div
      className={`unit level--${unit.level} ${selected ? "selected" : ""} ${
        optional ? "optional__level--" + unit.optional : ""
      }`}
      onClick={() => changeCurrentUnits(unit)}>
      {recommended ? <p className='recommended'>R</p> : null}
      {linked ? <p className='linked'>L</p> : null}
      {optional ? <p className='optional'>O{unit.optional}</p> : null}
      <p>{unit.name}</p>
      <p>
        ({unit.credits[0]},{unit.credits[1]})
      </p>
    </div>
  );
}
