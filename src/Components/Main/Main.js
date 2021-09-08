/** @format */

import React, { useEffect, useState } from "react";

import "./Main.css";

import { Careers } from "../../data";
import { infoCareer } from "../../data";

import SetUnits from "./SetUnits";
import Dropdown from "./Dropdown";
import InfoModal from "./InfoModal/InfoModal";

export default function Main() {
  const [mode, setMode] = useState("semester");
  const [career, setCareer] = useState("mecatronica");
  const [renderUnits, setRenderUnits] = useState();

  useEffect(() => {
    setRenderUnits(
      infoCareer[career][mode].map(key => {
        const units = Careers[career].filter(item => {
          return item[mode] === key;
        });
        return <SetUnits key={key} group={key} units={units} />;
      })
    );
  }, [mode, career]);

  return (
    <main>
      <section className='container'>
        <InfoModal />
        <Dropdown
          mode={career}
          changeMode={setCareer}
          options={["mecatronica", "telematica"]}
        />
        <Dropdown
          mode={mode}
          changeMode={setMode}
          options={["semester", "level", "credits"]}
        />
        {renderUnits && (
          <div className='units-grid grid__container--center'>
            {renderUnits}
          </div>
        )}
      </section>
    </main>
  );
}
