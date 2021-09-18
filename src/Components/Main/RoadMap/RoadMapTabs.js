/** @format */

//3rd libraries
import React, { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";

// Utils
import useFetchData from "../../../utils/useFetchData";
// import { GROUP_BY } from "../../../config";
import { transformText } from "../../../utils/generals";

// Components
import RoadMapTabRegular from "./RoadMapTabRegular";
import RoadMapTabOptional from "./RoadMapTabOptional";
import RoadMaploading from "./RoadMapLoading";

//UI
import { Icon } from "../../UI";
import { GROUP_BY } from "../../../config";

export default function RoadMapTabs({ career }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [order, setOrder] = useState(false);
  const [group, setGroup] = useState("semester");
  const { loading, error, units } = useFetchData(career);

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (loading) return <RoadMaploading loading={career} />;

  console.log(error);
  return (
    <div className='tab--container'>
      <div className='flex-container tab--header'>
        <div className='flex-container'>
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
          <SelectGroup selected={group} change={setGroup} />
          <Icon cName='flip' onClick={() => setOrder(order => !order)}>
            <FaExchangeAlt size={"100%"} />
          </Icon>
        </div>
      </div>
      <div className='tab--body'>
        {selectedTab === 0 ? (
          <RoadMapTabRegular
            units={units.regularUnits}
            info={units.infoCareer.regularUnits}
            order={order}
            group={group}
          />
        ) : (
          <RoadMapTabOptional
            units={units.optionalUnits}
            info={units.infoCareer.optionalUnits}
            order={order}
            group={group}
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

const SelectGroup = ({ selected, change }) => {
  return (
    <select onChange={e => change(e.target.value)} value={selected}>
      {GROUP_BY.map((item, i) => (
        <option value={item} key={i}>
          {transformText(item)[0].toUpperCase()}
        </option>
      ))}
    </select>
  );
};
