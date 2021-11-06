/** @format */

import React from "react";
import useOnScreen from "../../../../custom-hooks/useOnScreen";
import Unit from "./Unit";
import { useUnits } from "./UnitProvider";

export default function RenderUnitsOffScreen() {
  const { selectedUnit } = useUnits();

  const unitsToRenderOffScreen =
    selectedUnit &&
    document.querySelectorAll(
      selectedUnit.linked
        .concat(selectedUnit.recommended)
        .map(unit => "#" + unit)
        .join(",")
    );
  console.log(unitsToRenderOffScreen);
  const unitsOffScreen = useOnScreen(unitsToRenderOffScreen);
  console.log(unitsOffScreen);
  return (
    <div
      className='units-offscreen'
      style={{ position: "fixed", top: "3rem", left: "3rem" }}>
      {unitsOffScreen}
    </div>
  );
}
