/** @format */

import React from "react";
import { FaTimes } from "react-icons/fa";

import "./InfoModal.css";
import useClose from "../../../../../hooks/useClose";

export default function InfoModal({ setInfoModal = f => f }) {
  const ref = useClose(false, setInfoModal);
  return (
    <div className='info--modal'>
      <div ref={ref} className='info--modal__body '>
        <div className='icon--container' onClick={() => setInfoModal(false)}>
          <FaTimes color='black' size={"100%"} />
        </div>
      </div>
    </div>
  );
}
