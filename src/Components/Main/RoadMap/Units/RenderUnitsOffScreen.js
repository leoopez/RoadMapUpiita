/** @format */

import React, { useEffect } from "react";
import { useUnits } from "./UnitProvider";

export default function RenderUnitsOffScreen() {
  const { selectedUnit } = useUnits();
  useEffect(() => {
    const linkedUnits = document.getElementsByClassName("linked");
    const recommendedUnits = document.getElementsByClassName("recommended");
    console.log(linkedUnits, recommendedUnits);
  }, [selectedUnit]);

  return <div>later</div>;
}
