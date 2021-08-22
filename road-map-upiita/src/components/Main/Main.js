/** @format */

import React, { useState } from "react";

import "./Main.css";
import dataUnits from "../../data/mecatronica/learningUnits";

import Semester from "./Semester";

const showOption = {
  Semester: 10,
  Level: 5,
};

// const careerOption = {
//   0: "Mecatronica",
//   1: "Telematica",
//   2: "Bionica",
//   3: "Sistemas Automotrices",
//   4: "en Energia",
// };

export default function Main() {
  const [showSelected] = useState(showOption.Semester);

  const groupOfUnits = dataUnits.reduce(
    (reduceArray, unit, i) => {
      reduceArray[unit.semester - 1].push(unit);
      return reduceArray;
    },
    new Array(showSelected).fill(undefined).map(_ => new Array(0))
  );

  const renderUnits = groupOfUnits.map((units, i) => (
    <Semester key={i} semester={i} units={units} />
  ));
  console.log(renderUnits);

  return (
    <main>
      <section className='container'>
        <div className='option container'>
          <p>Dropdown menu...</p>
        </div>
        <div className='units-grid by-semester'>{renderUnits}</div>
      </section>
    </main>
  );
}
