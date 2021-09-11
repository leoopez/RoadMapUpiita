/** @format */

import React from "react";
import { useState } from "react/cjs/react.development";

import "./Aplication.css";

import Options from "./Options/Options";
import Settings from "./Settings/Settings";
import Units from "./Units/Units";

export default function Aplication() {
  const [career, setCareer] = useState(null);
  const [group, setGroup] = useState();
  const [order, setOrder] = useState();

  return (
    <>
      <section className='container'>
        <Settings
          career={career}
          changeCareer={setCareer}
          order={order}
          changeOrder={setOrder}
          group={group}
          changeGroup={setGroup}
        />
      </section>
      <section className='container'>
        <Units career={career} group={group} />
      </section>
      <Options />
    </>
  );
}
