/** @format */

import React from "react";

import { useUnits } from "./UnitProvider";
import useClose from "../../../../custom-hooks/useClose";

import { FaFilePdf } from "react-icons/fa";

export default function RegularUnit({
  unit,
  selected = false,
  linked = false,
  recommended = false,
  optional = false,
}) {
  const { changeCurrentUnits } = useUnits();
  const ref = useClose(null, changeCurrentUnits);

  return (
    <div className={`card unit level-${unit.level}`}>
      <div
        className={`flex-container flex-container--center front parent--space ${
          selected ? "selected" : ""
        }`}
        onClick={() => changeCurrentUnits(unit)}>
        {recommended ? <p className='recommended'>R</p> : null}
        {linked ? <p className='linked'>L</p> : null}
        {optional ? <p className='optional'>O{unit.optional}</p> : null}
        <p>{unit.name}</p>
        <p>
          ({unit.hours[0]},{unit.hours[1]})
        </p>
      </div>
      <div
        ref={ref}
        className={`flex-container flex-container--center back parent--space ${
          selected ? "selected-back" : ""
        }`}>
        <span className='icon--container icon--pdf'>
          <FaFilePdf size='100%' color='currentColor' />
        </span>
      </div>
    </div>
  );
}