/** @format */

import React, { createContext, useContext, useReducer } from "react";
import reducer from "./ApplicationReducer";
import { changeCarrer, changeOrder, changeGroup } from "./ApplicationActions";

const ApplicationContext = createContext();

export const useApplication = () => useContext(ApplicationContext);

const initialState = {
  career: null,
  group: "semester",
  order: null,
};

export default function ApplicationProvider({ children }) {
  const [{ career, group, order }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const triggerActionCareer = career => {
    dispatch(changeCarrer(career));
  };

  const triggerActionGroup = group => {
    dispatch(changeGroup(group));
  };

  const triggerActionOrder = order => {
    dispatch(changeOrder(order));
  };

  return (
    <ApplicationContext.Provider
      value={{
        career,
        group,
        order,
        triggerActionCareer,
        triggerActionGroup,
        triggerActionOrder,
      }}>
      {children}
    </ApplicationContext.Provider>
  );
}
