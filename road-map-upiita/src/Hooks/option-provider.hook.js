/** @format */

import React, { createContext, useContext, useState } from "react";

const OptionContext = createContext();

export const useMode = () => useContext(OptionContext);

export default function OptionProvider({ children }) {
  const [mode, setMode] = useState("Semester");

  return (
    <OptionContext.Provider value={{ mode, setMode }}>
      {children}
    </OptionContext.Provider>
  );
}
