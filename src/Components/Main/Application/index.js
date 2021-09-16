/** @format */

import React from "react";
import Application from "./Application";
import ApplicationProvider from "./ApplicationContext";
import UnitProvider from "../../../contexts/unit-provider/unit-provider-hook";

export default function Index() {
  return (
    <UnitProvider>
      <ApplicationProvider>
        <Application />
      </ApplicationProvider>
    </UnitProvider>
  );
}
