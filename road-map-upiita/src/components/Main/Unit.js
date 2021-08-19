/** @format */

import React from "react";
import "./Unit.css";

import { useUnit } from "../../Hooks/unit-provider-hook";

export default function Unit({ unit }) {
  const { selected, changeSelectedUnit } = useUnit();
  if (selected) {
    return (
      <div
        className={`unit ${unit.isSelected ? "unit--selected" : ""} ${
          unit.isRecommended ? "unit--recommended" : ""
        } ${unit.isLinked ? "unit--linked" : ""} level--${unit.level}`}
        onClick={() => {
          if (selected === unit) {
            changeSelectedUnit(null);
          } else {
            changeSelectedUnit(unit);
          }
        }}>
        <p>{unit.name}</p>
        <p>
          ({unit.credits[0]},{unit.credits[1]})
        </p>
      </div>
    );
  } else {
    return (
      <div
        className={"unit unit--selected level--" + unit.level}
        onClick={() => {
          if (selected === unit) {
            changeSelectedUnit(null);
          } else {
            changeSelectedUnit(unit);
          }
        }}>
        <p>{unit.name}</p>
        <p>
          ({unit.credits[0]},{unit.credits[1]})
        </p>
      </div>
    );
  }
}
