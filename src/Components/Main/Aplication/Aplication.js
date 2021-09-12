/** @format */

import React, { useState } from "react";

import Options from "./Options/Options";
import UnitsSettings from "./Settings/UntisSettings";
import RoadMap from "./RoadMap/RoadMap";

export default function Aplication() {
  const [career, setCareer] = useState("Mecatronica");
  const [group, setGroup] = useState("semester");
  const [order, setOrder] = useState();

  return (
    <div className='application'>
      <UnitsSettings />
      <RoadMap career={career} group={group} order={order} />
      <Options />
    </div>
  );
}
