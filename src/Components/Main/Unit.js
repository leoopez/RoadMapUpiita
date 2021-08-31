/** @format */

import React from "react";
import "./Unit.css";

import { useUnits } from "../../Hooks/unit-provider-hook";
import useClose from "../../Hooks/useClose";

import { FaFilePdf } from "react-icons/fa";

export default function Unit({
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
        className={`front parent--space flex__container--center ${
          selected ? "selected" : ""
        } ${optional ? "optional-" + unit.optional : ""}`}
        onClick={() => changeCurrentUnits(unit)}>
        {recommended ? <p className='recommended'>R</p> : null}
        {linked ? <p className='linked'>L</p> : null}
        {optional ? <p className='optional'>O{unit.optional}</p> : null}
        <p>{unit.name}</p>
        <p>
          ({unit.credits[0]},{unit.credits[1]})
        </p>
      </div>
      <div
        ref={ref}
        className={`back parent--space flex__container--center ${
          selected ? "selected-back" : ""
        }`}
        // onClick={() => changeCurrentUnits(null)}
      >
        <div className='icons--default pdf--icon'>
          <FaFilePdf size='100%' color='currentColor' />
        </div>
      </div>
    </div>
  );
}
