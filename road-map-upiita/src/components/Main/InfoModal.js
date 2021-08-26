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
      <div className='icons--default close--icon' onClick={onClick}>
        <FaTimes size='100%' />
      </div>
      <div className='simboly'>
        <h2 className='simbology--title'>Simbología</h2>
        <div className='simbology--content'>
          <div className='content--info'>
            <p className='info--units'>Unidad de Aprendizaje</p>
            <p className='info--hrs'>(Hrs.Teoria,Hrs.Practica)</p>
          </div>
          <div className='contents--levels'>
            <ul>
              <li>
                <span className='levels--1'>NIVEL 1</span>
                <div className='levels--1 line'></div>
              </li>
              <li>
                <span className='levels--2'>NIVEL 2</span>
                <div className='levels--2 line'></div>
              </li>
              <li>
                <span className='levels--3'>NIVEL 3</span>
                <div className='levels--3 line'></div>
              </li>
              <li>
                <span className='levels--4'>NIVEL 4</span>
                <div className='levels--4 line'></div>
              </li>
              <li>
                <span className='levels--5'>NIVEL 5</span>
                <div className='levels--5 line'></div>
              </li>
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
          <li>
            <span className='optional--1'>OPTATIVA 1</span>
            <div className='optional--1 line'></div>
          </li>
          <li>
            <span className='optional--2'>OPTATIVA 2</span>
            <div className='optional--2 line'></div>
          </li>
          <li>
            <span className='optional--3'>OPTATIVA 3</span>
            <div className='optional--3 line'></div>
          </li>
          <li>
            <span className='optional--4'>OPTATIVA 4</span>
            <div className='optional--4 line'></div>
          </li>
          <li>
            <span className='optional--5'>OPTATIVA 5</span>
            <div className='optional--5 line'></div>
          </li>
          <li>
            <span className='optional--6'>OPTATIVA 6</span>
            <div className='optional--6  line'></div>
          </li>
        </ul>
        <p className='notice'>
          *Click en unidades
          <br />
          de optativa para mostrar
        </p>
      </div>
    </div>
  );
};
