/** @format */

import React, { useState } from "react";

import "./Main.css";

import { regularUnits, infoCareer } from "../../data/mecatronica/learningUnits";

import SetUnits from "./SetUnits";
import Dropdown from "./Dropdown";
import InfoModal from "./InfoModal/InfoModal";

export default function Main() {
  const [mode, setMode] = useState("Semester");

  const renderUnits = regularUnits
    .reduce(
      (reduceArray, unit) => {
        reduceArray[unit[mode.toLowerCase()] - 1].push(unit);
        return reduceArray;
      },
      new Array(infoCareer[mode]).fill(undefined).map(_ => new Array(0))
    )
    .map((units, i) => <SetUnits key={i + 1} group={i + 1} units={units} />);

  return (
    <main>
      <section className='container'>
        <InfoModal />
        <Dropdown mode={mode} changeMode={setMode} />
        <div className='units-grid grid__container--center'>{renderUnits}</div>
      </section>
    </main>
  );
}
