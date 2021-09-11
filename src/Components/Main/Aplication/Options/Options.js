/** @format */

import React, { useState } from "react";

import "./Options.css";

import InfoModal from "./InfoModal/InfoModal";

import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

export default function Options() {
  const [darkMode, setDarkMode] = useState(false);
  const [infoModal, setInfoModal] = useState(false);

  return (
    <div className='options--bar'>
      <div className='icon--container'>
        {darkMode ? <FaSun size={"100%"} /> : <FaMoon size={"100%"} />}
      </div>
      <div
        className='icon--container'
        onClick={() => setInfoModal(state => !state)}>
        <FaInfoCircle size={"100%"} />
      </div>
      <div className='icon--container'>
        <FaAngleDown size={"100%"} />
      </div>
      {infoModal && <InfoModal setInfoModal={setInfoModal} />}
    </div>
  );
}
