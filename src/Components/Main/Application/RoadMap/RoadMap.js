/** @format */

import React from "react";

import RoadMapUnits from "./RoadMapUnits";
import RoadMapLaoding from "../../../UI/RoadMapLaoding";
import useFetchData from "../../../../utils/useFetchData";

import { useApplication } from "../ApplicationContext";

export default function RoadMap() {
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

  return <div className='grid-container--center'>{renderUnits}</div>;
}
