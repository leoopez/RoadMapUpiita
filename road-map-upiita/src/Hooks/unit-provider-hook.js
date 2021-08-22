import React, {createContext, useContext, useState} from "react"
import dataUnits from "../data/mecatronica/learningUnits";

const UnitsContext = createContext();

export const useUnit = () => useContext(UnitsContext);

export default function UnitsProvider({ children }) {
  const [selected, setSelected] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(
    dataUnits.map((unit, id) => {
      return {
        id,
        isSelected: true,
        isLinked: false,
        isRecommended: false,
      };
    })
  );

  const changeSelectedUnit = newUnitSelected => {
    let newData;
    if (newUnitSelected) {
      newData = selectedUnit.map((unit, id) => {
        console.log(unit);
        if (newUnitSelected.recommended.includes(id))
          return { ...unit, isRecommended: false };
        else if (newUnitSelected.linked.includes(id))
          return { ...unit, isLinked: true };
        else if (newUnitSelected.id === id)
          return { ...unit, isSelected: true };
        else
          return {
            ...unit,
            isSelected: true,
            isLinked: false,
            isRecommended: false,
          };
      });
    } else {
      newData = selectedUnit.map(unit => {
        return {
          ...unit,
          isSelected: false,
          isLinked: false,
          isRecommended: false,
        };
      });
    }
    setSelected(newUnitSelected);
    setSelectedUnit(newData);
  };

  return (
    <UnitsContext.Provider
      value={{ selected, selectedUnit, dataUnits, changeSelectedUnit }}>
      {children}
    </UnitsContext.Provider>
  );
}