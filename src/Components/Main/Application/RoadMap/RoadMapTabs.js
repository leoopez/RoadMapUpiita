/** @format */

import React, { useState } from "react";
import RoadMapUnits from "./RoadMapUnits";
import RoadMapLaoding from "../../../UI/RoadMapLaoding";
import useFetchData from "../../../../utils/useFetchData";

import { useApplication } from "../ApplicationContext";

export default function RoadMapTabs() {
  const [selectedTab, setSelectedTab] = useState(0);
  const { career, group, order } = useApplication();
  const { loading, error, units } = useFetchData(career);

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (loading) return <RoadMapLaoding loading={career} />;

  const renderUnits = units.infoCareer[group].map(it => (
    <RoadMapUnits
      key={it}
      units={units.regularUnits.filter(unit => unit[group] === it)}
      group={it}
    />
  ));
  if (order) renderUnits.reverse();

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
          <div className='grid-container--center'>{renderUnits}</div>
        ) : null}
      </div>
    </div>
  );
}
