/** @format */

import React from "react";

export default function UnitSkeleton() {
  return (
    <div className='card unit--skeleton'>
      <div className='flex-container flex-container--center front parent--space'>
        <div className='skeleton--text-p'></div>
        <div className='skeleton--text-s'></div>
      </div>
    </div>
  );
}
