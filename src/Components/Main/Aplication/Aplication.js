/** @format */

import React from "react";

import Options from "./Options/Options";
import UnitsSettings from "./Settings/UnitsSettings";
import Units from "./Units/Units";

export default function Aplication() {
  return (
    <>
      <section className='container'>
        <UnitsSettings />
      </section>
      <section className='container'>
        <Units career='Mecatronica' order='semester' />
      </section>
      <Options />
    </>
  );
}
