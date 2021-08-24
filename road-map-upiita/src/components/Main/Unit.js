/** @format */

import React, { useState } from "react";
import "./Unit.css";

import { useUnits } from "../../Hooks/unit-provider-hook";

export default function Unit({ unit }) {
  const [unitSelected, setUnitSelected] = useState(null);
  const { changeUnits } = useUnits();

  const onClick = id => {
    if (unitSelected === id) {
      setUnitSelected(null);
      changeUnits(null);
      return;
    }
    setUnitSelected(id);
    changeUnits(id);
  };

  return (
    <div
      className={`unit level--${unit.level} ${
        unit.isSelected ? "unit--selected" : "unit--unselected"
      } ${unit.isRecommended ? "unit--recommended" : ""} ${
        unit.isLinked ? "unit--linked" : ""
      }`}
      onClick={() => onClick(unit.id)}>
      {unit.isRecommended ? <p className='recommended'>R</p> : null}
      {unit.isLinked ? <p className='linked'>L</p> : null}
      {/* <p className='recommended'>R</p>
      <p className='linked'>L</p> */}
      <p>{unit.name}</p>
      <p>
        ({unit.credits[0]},{unit.credits[1]})
      </p>
    </div>
  );
}
