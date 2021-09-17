/** @format */

import React, { useState } from "react";

// Components
import RoadMapTabRegular from "./RoadMapTabRegular";
import RoadMapTabOptional from "./RoadMapTabOptional";
import RoadMapLaoding from "../../../UI/RoadMapLaoding";

// Utils
import useFetchData from "../../../../utils/useFetchData";

//Context
import { useApplication } from "../ApplicationContext";

export default function RoadMapTabs() {
  const [selectedTab, setSelectedTab] = useState(0);

  const { career } = useApplication();
  const { loading, error, units } = useFetchData(career);

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (loading) return <RoadMapLaoding loading={career} />;

  return (
    <div className='tab--container'>
      <div className='flex-container tab--header'>
        <div
          className={`flex-container flex-container--center tab-header--item ${
            selectedTab === 0 ? "active" : ""
          }`}
          onClick={() => setSelectedTab(0)}>
          Regulares
        </div>
        <div
          className={`flex-container flex-container--center tab-header--item ${
            selectedTab === 1 ? "active" : ""
          }`}
          onClick={() => setSelectedTab(1)}>
          Optativas
        </div>
      </div>
      <div className='tab--body'>
        {selectedTab === 0 ? (
          <RoadMapTabRegular
            units={units.regularUnits}
            info={units.infoCareer.regularUnits}
          />
        ) : (
          <RoadMapTabOptional
            units={units.optionalUnits}
            info={units.infoCareer.optionalUnits}
          />
        )}
      </div>
    </div>
  );
}
