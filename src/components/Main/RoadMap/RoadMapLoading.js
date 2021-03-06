/** @format */

import React from "react";

export default function RoadingMapLoading() {
  return (
    <div className='units-grid grid-container--center'>
      <div className='group flex-container flex-container--center'>
        <Units />
      </div>
    </div>
  );
}

function Units() {
  const units = [...Array(30)].map((x, y) => <UnitSkeleton key={y} />);
  return units;
}

function UnitSkeleton() {
  return (
    <div className='card unit--skeleton flex-container flex-container--center parent--space'>
      <div className='skeleton skeleton--text-p'></div>
      <div className='skeleton skeleton--text-s'></div>
    </div>
  );
}
