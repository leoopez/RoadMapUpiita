/** @format */

import React, { useState } from "react";

import "./Main.css";

import { regularUnits } from "../../data/mecatronica/learningUnits";

import SetUnits from "./SetUnits";
import Dropdown from "./Dropdown";
import InfoModal from "./InfoModal/InfoModal";

const showOption = {
  Semester: 10,
  Level: 5,
};

export default function Main() {
  const [mode, setMode] = useState("Semester");

  const renderUnits = regularUnits
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
        <InfoModal />
        <Dropdown mode={mode} changeMode={setMode} />
        <div className='units-grid'>{renderUnits}</div>
      </section>
    </main>
  );
}
