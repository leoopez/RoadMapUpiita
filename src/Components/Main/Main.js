/** @format */

import React from "react";

import Application from "./Application/Application";
import ApplicationProvider from "./Application/ApplicationContext";
export default function Main() {
  return (
    <main className='main'>
      <ApplicationProvider>
        <Application />
      </ApplicationProvider>
    </main>
  );
}
