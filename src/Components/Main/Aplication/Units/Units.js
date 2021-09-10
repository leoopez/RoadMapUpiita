/** @format */

import React from "react";

import SetUnits from "./SetUnits";
import useFetchData from "../../../../contexts/fetch-data-provider/useFetchData";

export default function Units({ career, order }) {
  const { loading, error, units } = useFetchData(career);
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (loading) return <div>Loading</div>;
  const renderUnits = units.infoCareer[order].map(it => (
    <SetUnits
      key={it}
      units={units.regularUnits.filter(unit => unit[order] === it)}
      group={it}
    />
  ));
  return (
    <div className='units-grid grid__container--center'>{renderUnits}</div>
  );
}
