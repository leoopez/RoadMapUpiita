/** @format */

import React, { createContext, useContext, useState } from "react";
import data from "../data/mecatronica/learningUnits";

const UnitContext = createContext();

export const useUnits = () => useContext(UnitContext);

const restartData = () =>
  data.map((unit, id) => ({
    ...unit,
    id,
    isSelected: true,
    isLinked: false,
    isRecommended: false,
  }));

export default function UnitProvider({ children }) {
  const [mode, setMode] = useState("Semester");
  const [dataUnits, setDataUnits] = useState(restartData());

  const changeMode = newMode => setMode(newMode);

  const changeUnits = id => {
    const newData = restartData();

    if (!id) {
      newData.forEach(unit => {
        unit.isSelected = true;
      });
      setDataUnits(newData);
      return;
    }

    newData.forEach(unit => {
      unit.isSelected = false;
    });

    newData[id].isSelected = true;
    newData[id].linked.forEach(i => {
      newData[i].isLinked = true;
    });

    newData[id].recommended.forEach(i => {
      newData[i].isRecommended = true;
    });

    setDataUnits(newData);
  };
  return (
    <UnitContext.Provider value={{ mode, changeMode, dataUnits, changeUnits }}>
      {children}
    </UnitContext.Provider>
  );
}
