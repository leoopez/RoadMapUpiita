/** @format */

import React from "react";

import RegularUnit from "./RegularUnit";

export default function RegularUnits({ units, group }) {
  const renderUnits = units.map((u, i) => <RegularUnit key={i} unit={u} />);

  return (
    <>
      <div className='group--number flex-container flex-container--center'>
        {group}
      </div>
      <div className='flex-container'>{renderUnits}</div>
    </>
  );
}
