/** @format */

import React from "react";

import "./Main.css";

import { useUnits } from "../../Hooks/unit-provider-hook";

import SetUnits from "./SetUnits";
import Dropdown from "./Dropdown";

const showOption = {
  Semester: 10,
  Level: 5,
};

export default function Main() {
  const { mode, dataUnits } = useUnits();

  const renderUnits = dataUnits
    .reduce(
      (reduceArray, unit) => {
        reduceArray[unit[mode.toLowerCase()] - 1].push(unit);
        return reduceArray;
      },
      new Array(showOption[mode]).fill(undefined).map(_ => new Array(0))
    )
    .map((units, i) => <SetUnits key={i + 1} group={i + 1} units={units} />);

  return (
    <main>
      <section className='container'>
        <div className='container'>
          <Dropdown />
        </div>
        <div className='units-grid'>{renderUnits}</div>
      </section>
    </main>
  );
}
