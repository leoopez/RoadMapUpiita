/** @format */
import React, { useState } from "react";

import useClose from "../../../custom-hooks/useClose";

import { CAREERS, GROUP_BY, ORDER_BY } from "../../../config";
import { useApplication } from "./ApplicationContext";

import {
  FaAngleDoubleUp,
  FaChevronRight,
  FaChevronDown,
  FaWindowClose,
  FaExchangeAlt,
} from "react-icons/fa";

export default function AplicationSettings() {
  const { career, group } = useApplication();

  return (
    <nav className='nav-container'>
      <ul className='flex-container parent--space nav'>
        <li className='flex-container flex-container--center nav-item'>
          <span className='nav--text'>
            {career || <span style={{ color: "gray" }}>Carrera</span>}
          </span>
        </li>
        <span className='icon--container nav-icon'>
          <FaExchangeAlt size={"100%"} color={"#bbb"} />
        </span>
        <li className='flex-container flex-container--center nav-item'>
          <span className='nav--text'>
            {group || <span style={{ color: "gray" }}>Agrupar</span>}
          </span>
        </li>
      </ul>
    </nav>
  );
}
