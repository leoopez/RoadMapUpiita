/** @format */

import React from "react";

import Unit from "./Unit";

export default function Units({ units, group }) {
  const renderUnits = units.map((u, i) => <Unit key={i} unit={u} />);

  return (
    <>
      <div className='group--number flex-container flex-container--center'>
        {group}
      </div>
      <div className='flex-container flex-container--center group--units'>
        {renderUnits}
      </div>
    </>
  );
}
