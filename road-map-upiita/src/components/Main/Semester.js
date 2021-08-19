/** @format */

import React from "react";
import "./Semester.css";

import Unit from "./Unit";

export default function Semester({ units, semester }) {
  const renderUnits = units.map((unit, i) => <Unit key={i} unit={unit} />);
  return (
    <>
      <div className='semester--unit'>{semester}</div>
      <div className='semester'>{renderUnits}</div>
    </>
  );
}
