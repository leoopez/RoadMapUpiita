/** @format */

import React, { createContext, useContext, useState } from "react";

const UnitContext = createContext();

//export hook that creates a Context Consumer
export const useUnits = () => useContext(UnitContext);

export default function UnitProvider({ children }) {
  const [currentUnit, setCurrenUnit] = useState(null);
  const [linkedUnits, setLinkedUnits] = useState(null);
  const [recommendedUnits, setRecommendedUnits] = useState(null);

  const changeCurrentUnits = unit => {
    if (!unit || unit.id === currentUnit?.id) {
      setCurrenUnit(null);
      setLinkedUnits(null);
      setRecommendedUnits(null);
      return;
    }

    if (unit.optional) {
      console.log(unit);
    }

    setCurrenUnit(unit);
    setLinkedUnits([...unit.linked]);
    setRecommendedUnits([...unit.recommended]);
  };

  return (
    <UnitContext.Provider
      value={{
        currentUnit,
        linkedUnits,
        recommendedUnits,
        changeCurrentUnits,
      }}>
      {children}
    </UnitContext.Provider>
  );
}
