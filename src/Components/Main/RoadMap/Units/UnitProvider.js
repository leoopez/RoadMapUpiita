/** @format */

import React, { createContext, useContext, useEffect, useState } from "react";
import useOnScreen from "../../../../custom-hooks/useOnScreen";

const UnitContext = createContext();
//export hook that creates a Context Consumer
export const useUnits = () => useContext(UnitContext);

export default function UnitProvider({ children }) {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [unitsOffScreen, setUnitsOffScreen] = useState(null);

  const changeUnit = newUnit => {
    setSelectedUnit(newUnit);
  };

  return (
    <UnitContext.Provider
      value={{
        selectedUnit,
        unitsOffScreen,
        changeUnit,
      }}>
      {children}
    </UnitContext.Provider>
  );
}
