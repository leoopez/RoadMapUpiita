/** @format */
import React, { useState } from "react";

import SettingsDropdown from "./SettingsDropdown";

const careers = ["Mecatronica", "Telematica", "Bionica"];
const orderBy = ["semester", "level"];

export default function UnitsSettings() {
  const [career, setCareer] = useState(careers[0]);
  const [order, serOrder] = useState("semester");
  return (
    <div>
      <SettingsDropdown
        mode={career}
        changeMode={setCareer}
        options={careers}
      />
      <SettingsDropdown mode={order} changeMode={serOrder} options={orderBy} />
    </div>
  );
}
