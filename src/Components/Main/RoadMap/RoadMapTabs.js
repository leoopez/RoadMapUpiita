/** @format */

//3rd libraries
import React, { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";

// Utils
import useFetchData from "../../../utils/useFetchData";
import { transformText } from "../../../utils/generals";

// Components
import RoadMapTab from "./RoadMapTab";
import RoadMaploading from "./RoadMapLoading";

//UI
import { Icon } from "../../UI";

export default function RoadMapTabs({ career }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [order, setOrder] = useState(false);
  const [group, setGroup] = useState("semester");

  const changeTab = tab => {
    setSelectedTab(tab);
    setOrder(false);
    setGroup("semester");
  };
  const { loading, error, units } = useFetchData(career);

  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (loading) return <RoadMaploading loading={career} />;

  return (
    <div className='tab--container'>
      <div className='flex-container tab--header'>
        <div className='flex-container'>
          <TabItem
            index={0}
            tab='Regulares'
            selectedTab={selectedTab}
            changeTab={changeTab}
          />
          <TabItem
            index={1}
            tab='Optativas'
            selectedTab={selectedTab}
            changeTab={changeTab}
          />
        </div>
        <div className='flex-container tab--options'>
          <SelectGroup
            groupby={
              selectedTab === 0
                ? units.infoCareer.regularUnits.groupby
                : units.infoCareer.optionalUnits.groupby
            }
            selected={group}
            change={setGroup}
          />
          <Icon cName='flip' onClick={() => setOrder(order => !order)}>
            <FaExchangeAlt size={"100%"} />
          </Icon>
        </div>
      </div>
      <div className='tab--body'>
        {selectedTab === 0 ? (
          <RoadMapTab
            units={units.regularUnits}
            info={units.infoCareer.regularUnits}
            order={order}
            group={group}
          />
        ) : (
          <RoadMapTab
            units={units.optionalUnits}
            info={units.infoCareer.optionalUnits}
            order={order}
            group={group}
            optional={true}
          />
        )}
      </div>
    </div>
  );
}

const TabItem = ({ index, tab, selectedTab, changeTab = f => f }) => {
  return (
    <div
      className={`flex-container flex-container--center tab-header--item ${
        selectedTab === index ? "active" : ""
      }`}
      onClick={() => changeTab(index)}>
      {tab}
    </div>
  );
};

const SelectGroup = ({ groupby = [], selected, change }) => {
  console.log(groupby);
  return (
    <select onChange={e => change(e.target.value)} value={selected}>
      {groupby.map((item, i) => (
        <option value={item} key={i}>
          {transformText(item)[0].toUpperCase()}
        </option>
      ))}
    </select>
  );
};
