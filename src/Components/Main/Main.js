/** @format */

import React, { useState } from "react";

import "./Main.css";

import { regularUnits, infoCareer } from "../../data/mecatronica/learningUnits";

import SetUnits from "./SetUnits";
import Dropdown from "./Dropdown";
import InfoModal from "./InfoModal/InfoModal";

for (const [key, value] of Object.entries(infoCareer)) {
  key === "Credits"
    ? regularUnits.forEach((unit, i) => {
        const creditIndex =
          unit[key.toLowerCase()][0] * 2 + unit[key.toLowerCase()][1];
        value[creditIndex.toString()].push(unit);
      })
    : regularUnits.forEach((unit, i) => {
        value[unit[key.toLowerCase()]].push(unit);
      });
}

export default function Main() {
  const [mode, setMode] = useState("Semester");
  let renderUnits;
  if (mode === "Credits")
    renderUnits = Object.keys(infoCareer[mode])
      .sort()
      .map(key => (
        <SetUnits key={key} group={key} units={infoCareer[mode][key]} />
      ));
  else
    renderUnits = Object.keys(infoCareer[mode]).map(key => (
      <SetUnits key={key} group={key} units={infoCareer[mode][key]} />
    ));
  console.log(renderUnits);

  // const renderUnits = regularUnits
  //   .reduce(
  //     (reduceArray, unit) => {
  //       const value =
  //         mode === "Credits"
  //           ? reduceArray[unit[mode.toLowerCase()] - 1].push(unit)
  //           : reduceArray[unit[mode.toLowerCase()] - 1].push(unit);
  //       return reduceArray;
  //     },
  //     new Array(infoCareer[mode].length).fill(undefined).map(_ => new Array(0))
  //   )
  //   .map((units, i) => (
  //     <SetUnits key={i + 1} group={infoCareer[mode][i]} units={units} />
  //   ));

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
