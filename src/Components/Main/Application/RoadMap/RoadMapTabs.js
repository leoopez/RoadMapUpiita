/** @format */

//3rd libraries
import React, { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";

// Components
import RoadMapTabRegular from "./RoadMapTabRegular";
import RoadMapTabOptional from "./RoadMapTabOptional";
import RoadMaploading from "./RoadMapLoading";

// Utils
import useFetchData from "../../../../utils/useFetchData";

//Context
import { useApplication } from "../ApplicationContext";

export default function RoadMapTabs() {
  const [selectedTab, setSelectedTab] = useState(0);

  const { career, triggerActionOrder } = useApplication();
  const { loading, error, units } = useFetchData(career);

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (loading) return <RoadMaploading loading={career} />;

  return (
    <div className='tab--container'>
      <div className='flex-container tab--header'>
        <div className='flex-container tabs--nav'>
          <TabItem
            index={0}
            tab='Regulares'
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
          <TabItem
            index={1}
            tab='Optativas'
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </div>
        <div className='flex-container tab--options'>
          <span
            className='icon--container flip'
            onClick={() => triggerActionOrder()}>
            <FaExchangeAlt size={"100%"} />
          </span>
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

const TabItem = ({ index, tab, selectedTab, setSelectedTab = f => f }) => {
  return (
    <div
      className={`flex-container flex-container--center tab-header--item ${
        selectedTab === index ? "active" : ""
      }`}
      onClick={() => setSelectedTab(index)}>
      {tab}
    </div>
  );
};
