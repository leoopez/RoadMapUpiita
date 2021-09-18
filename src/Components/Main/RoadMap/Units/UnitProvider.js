/** @format */

import React, { createContext, useContext, useState } from "react";

const UnitContext = createContext();
//export hook that creates a Context Consumer
export const useUnits = () => useContext(UnitContext);

const initialValues = {
  currentUnit: null,
  linkedUnits: [],
  recommendedUnits: [],
};

export default function UnitProvider({ children }) {
  const [{ currentUnit, linkedUnits, recommendedUnits }, setState] =
    useState(initialValues);

  const changeCurrentUnits = unit => {
    !unit || unit.id === currentUnit?.id
      ? setState(initialValues)
      : setState({
          currentUnit: unit,
          linkedUnits: [...unit.linked],
          recommendedUnits: [...unit.recommended],
        });
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
