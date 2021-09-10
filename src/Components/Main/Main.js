/** @format */

import React, { useState } from "react";

import "./Main.css";

import SetUnits from "./SetUnits";
import Dropdown from "./SettingsDropdown";
import Options from "./Options/Options";
import UnitsSettings from "./Settings/UnitsSettings";
import useFetchData from "../../contexts/fetch-data-provider/useFetchData";

const careers = ["Mecatrónica", "Telematica", "Bionica"];
const orderBy = ["semester", "level"];

export default function Main() {
  const [order, serOrder] = useState("semester");
  const [career, setCareer] = useState(careers[0]);

  const { loading, error, units } = useFetchData("Mecatronica");

  if (loading) return <div>Loading</div>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  const renderUnits = units.infoCareer[order].map(it => (
    <SetUnits
      key={it}
      units={units.regularUnits.filter(unit => unit[order] === it)}
      group={it}
    />
  ));

  return (
    <main>
      <section>
        <UnitsSettings />
      </section>
      <section className='container'>
        <Dropdown mode={career} changeMode={setCareer} options={careers} />
        <Dropdown mode={order} changeMode={serOrder} options={orderBy} />
        <div className='units-grid grid__container--center'>{renderUnits}</div>
      </section>
      <Options />
    </main>
  );
}
