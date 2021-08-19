/** @format */

import React, { useState } from "react";
import { FaInfo, FaWindowClose } from "react-icons/fa";

import "./Main.css";
import { useUnit } from "../../Hooks/unit-provider-hook";

import Unit from "./Unit";
// import Semester from "./Semester";

export default function Main() {
  // const [modal, setModal] = useState(false);
  const { dataUnits } = useUnit();

  const renderUnits = dataUnits.map((unit, i) => <Unit key={i} unit={unit} />);

  return (
    <>
      {/* <Info changeModal={setModal} currModal={modal} />
      {modal ? <ModelInfo /> : null} */}
      <div className='main'>{renderUnits}</div>
    </>
  );
}

function Info({ currModal, changeModal }) {
  return (
    <div className='info' onClick={() => changeModal(!currModal)}>
      <FaInfo size={{ height: "24px" }} />
    </div>
  );
}

function ModelInfo() {
  return (
    <div className='info--model'>
      <FaWindowClose size={{ height: "24px" }} />
      {/* <div className='info--simb'>
        <h4>SIMBOLOGIA</h4>
        <div className='info--container'>
          <div className='info--credits'>
            <p>Unidad de Aprendizaje</p>
            <p>(Hrs.Teoria, Hrs.Practica)</p>
          </div>
          <div className='info--levels'>
            <div className='info--1'>
              NIVEL 1<hr className='info--line-1'></hr>
            </div>
            <div className='info--2'>
              NIVEL 2<hr className='info--line-2'></hr>
            </div>
            <div className='info--3'>
              NIVEL 3<hr className='info--line-3'></hr>
            </div>
            <div className='info--4'>
              NIVEL 4<hr className='info--line-4'></hr>
            </div>
            <div className='info--5'>
              NIVEL 5<hr className='info--line-5'></hr>
            </div>
          </div>
        </div>
      </div>
      <div className='info--elec'>
        <p>3 ELECTIVAS</p>
        <p>7 CREDITOS CADA UNA</p>
      </div> */}
    </div>
  );
}
