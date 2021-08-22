/** @format */

import React from "react";
import "./Unit.css";

export default function Unit({ unit }) {
  return (
    <div className={"unit unit--selected level--" + unit.level}>
      <p>{unit.name}</p>
      <p>
        ({unit.credits[0]},{unit.credits[1]})
      </p>
    </div>
  );
}
