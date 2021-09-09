/** @format */

import React, { useReducer } from "react";
import { FaTimes } from "react-icons/fa";

import "./InfoModal.css";

import { FaInfoCircle } from "react-icons/fa";

export default function InfoModal() {
  const [open, toggle] = useReducer(open => !open, false);

  return (
    <>
      <div className='icons--default info--icon' onClick={toggle}>
        <FaInfoCircle size='100%' />
      </div>
      {open && <Modal onClick={toggle} />}
    </>
  );
}


const Modal = ({ onClick = f => f }) => {
  return (
    <div className='info--modal'>
      <div className='info--modal__body '>
        <div className='icons--default close--icon' onClick={onClick}>
          <FaTimes size='100%' />
        </div>
        <div className='flex__container--center simboly'>
          <h2>Simbología</h2>
          <div className='flex__container--center'>
            <div className='flex__container--center content--info'>
              <p>Unidad de Aprendizaje</p>
              <p>(Hrs.Teoria,Hrs.Practica)</p>
            </div>
            <div className='contents--levels'>
              <ul>
                {[...Array(5)].map((_, i) => (
                  <ContentLevel key={i} level={i + 1} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='electives'>
          <p>3 ELECTIVAS</p>
          <p>7 CREDITOS CADA UNA</p>
        </div>
        <div className='modal-optional'>
          <h2 className='simbology--title'>Optativas</h2>
          <ul>
            {[...Array(5)].map((_, i) => (
              <ContentLevel
                key={i}
                levelorOptional={"optional"}
                level={i + 1}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ContentLevel = ({ levelorOptional = "level", level }) => {
  return (
    <li>
      <span className={`${levelorOptional}-${level}`}>
        {levelorOptional === "level" ? "NIVEL" : "OPTATIVA"} {level}
      </span>
      <div className={`${levelorOptional}-${level} line`}></div>
    </li>
  );
};