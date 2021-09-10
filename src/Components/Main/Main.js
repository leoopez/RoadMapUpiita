/** @format */

import React, { useEffect, useState } from "react";

import "./Main.css";

import { Careers } from "../../data";
import { infoCareer } from "../../data";

import SetUnits from "./SetUnits";
import Dropdown from "./SettingsDropdown";
import Options from "./Options/Options";
import UnitsSettings from "./Settings/UnitsSettings";
import useFetchData from "../../contexts/fetch-data-provider/useFetchData";

const careers = ["Mecatrónica", "Telematica", "Bionica"];
const orderBy = ["Semestre", "Nivel", "Creditos"];

export default function Main() {
  const [mode, setMode] = useState("Semestre");
  const [career, setCareer] = useState(careers[0]);
  const [renderUnits, setRenderUnits] = useState(null);
  const { loading, error, units } = useFetchData("Mecatronica");
  console.log(loading, error, units);
  // useEffect(() => {
  //   setRenderUnits(
  //     infoCareer[career][mode].map(key => {
  //       const units = Careers[career].filter(item => {
  //         return item[mode] === key;
  //       });
  //       return <SetUnits key={key} group={key} units={units} career={career} />;
  //     })
  //   );
  // }, [mode, career]);

  return (
    <main>
      <section>
        <UnitsSettings />
      </section>
      <section className='container'>
        <Dropdown mode={career} changeMode={setCareer} options={careers} />
        <Dropdown mode={mode} changeMode={setMode} options={orderBy} />
        {renderUnits && (
          <div className='units-grid grid__container--center'>
            {renderUnits}
          </div>
        )}
      </section>
      <Options />
    </main>
  );
}
