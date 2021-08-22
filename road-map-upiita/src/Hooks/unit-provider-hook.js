/** @format */

import React, { createContext, useContext } from "react";

const UnitContext = createContext();

export const useUnit = () => useContext(UnitContext);

export default function UnitProvider({ children }) {
  return <UnitContext.Provider value={null}>{children}</UnitContext.Provider>;
}
