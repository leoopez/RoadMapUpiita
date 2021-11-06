/** @format */

import React from "react";

import RoadMapTabs from "./RoadMapTabs";
import UnitProvider from "./Units/UnitProvider";
export default function RoadMap({ career }) {
  return (
    <div>
      <h1 className='txt--center mt mb'>Ingenieria {career}</h1>
      <UnitProvider>
        <RoadMapTabs career={career} />
      </UnitProvider>
    </div>
  );
}
