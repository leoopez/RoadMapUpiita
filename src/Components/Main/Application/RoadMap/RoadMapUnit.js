/** @format */

import React from "react";

import { useUnits } from "../../../../contexts/unit-provider/unit-provider-hook";
import useClose from "../../../../custom-hooks/useClose";

import { FaFilePdf } from "react-icons/fa";

export default function RoadMapUnit({
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
        } ${optional ? "optional-" + unit.optional : ""}`}
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
        }`}
        // onClick={() => changeCurrentUnits(null)}
      >
        <span className='icon--container icon--pdf'>
          <FaFilePdf size='100%' color='currentColor' />
        </span>
      </div>
    </div>
  );
}
