/** @format */

import React from "react";
import { useState } from "react/cjs/react.development";

import "./Aplication.css";

import Options from "./Options/Options";
import UnitsSettings from "./Settings/UntisSettings";
import Units from "./Units/Units";

export default function Aplication() {
  const [career, setCareer] = useState("Mecatronica");
  const [group, setGroup] = useState("semester");
  const [order, setOrder] = useState();

  return (
    <div className='application'>
      <UnitsSettings
        career={career}
        changeCareer={setCareer}
        order={order}
        changeOrder={setOrder}
        group={group}
        changeGroup={setGroup}
      />
      <Units career={career} group={group} />
      <Options />
    </div>
  );
}
