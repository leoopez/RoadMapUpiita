/** @format */

import React, { createContext, useContext, useState } from "react";

const UnitContext = createContext();
//export hook that creates a Context Consumer
export const useUnits = () => useContext(UnitContext);

export default function UnitProvider({ children }) {
  const [selectedUnit, setSelectedUnit] = useState(null);

  const changeUnit = newUnit => {
    setSelectedUnit(newUnit);
  };

  return (
    <UnitContext.Provider
      value={{
        selectedUnit,
        changeUnit,
      }}>
      {children}
    </UnitContext.Provider>
  );
}
