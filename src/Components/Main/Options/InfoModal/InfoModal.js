/** @format */

import React from "react";
import { FaTimes } from "react-icons/fa";

import "./InfoModal.css";

export default function InfoModal({ setInfoModal = f => f }) {
  return (
    <div className='info--modal'>
      <div className='info--modal__body '>
        <div className='icon--container' onClick={() => setInfoModal(false)}>
          <FaTimes color='black' size={"100%"} />
        </div>
      </div>
    </div>
  );
}
