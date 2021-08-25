/** @format */

import React, { useReducer } from "react";
import "./InfoModal.css";

import { FaInfoCircle } from "react-icons/fa";

export default function InfoModal() {
  const [open, toggle] = useReducer(open => !open, false);

  return (
    <>
      <div className='icons--default info--icon' onClick={toggle}>
        <FaInfoCircle size='100%' />
      </div>
      {open && <div className='info--modal'>Here</div>}
    </>
  );
}
