/** @format */
import React, { useState } from "react";

import useClose from "../../../custom-hooks/useClose";

import { CAREERS, GROUP_BY } from "../../../config";
import { transformText } from "../../../utils/generals";
import { useApplication } from "./ApplicationContext";

import { FaWindowClose, FaExchangeAlt } from "react-icons/fa";

export default function AplicationSettings() {
  const {
    career,
    group,
    triggerActionCareer,
    triggerActionGroup,
    triggerActionOrder,
  } = useApplication();
  const [openSidebarCareer, setOpenSidebarCareer] = useState(false);
  const [openSidebarGroup, setOpenSidebarGroup] = useState(false);

  const ref_left = useClose(false, setOpenSidebarCareer);
  const ref_right = useClose(false, setOpenSidebarGroup);

  return (
    <>
      <div className='flex-container settings'>
        <button
          className='btn btn--settings'
          onClick={() =>
            setOpenSidebarCareer(openSidebarCareer => !openSidebarCareer)
          }>
          {career || <span style={{ color: "#aaa" }}>Carrera</span>}
        </button>
        <span className='icon--container' onClick={() => triggerActionOrder()}>
          <FaExchangeAlt size={"100%"} color={"#bbb"} />
        </span>

        <button
          className='btn btn--settings'
          onClick={() =>
            setOpenSidebarGroup(openSidebarGroup => !openSidebarGroup)
          }>
          {transformText(group) || (
            <span style={{ color: "#aaa" }}>Agrupar por:</span>
          )}
        </button>
      </div>
      <div
        ref={ref_left}
        className={`sidebar--container sidebar--container-l ${
          openSidebarCareer ? "active" : ""
        }`}>
        <span
          className='icon--container icon--left'
          onClick={() => setOpenSidebarCareer(open => !open)}>
          <FaWindowClose size={"100%"} color={"#bbb"} />
        </span>
        <nav>
          <ul
            className='sidebar--nav'
            onClick={() =>
              setOpenSidebarCareer(openSidebarCareer => !openSidebarCareer)
            }>
            {CAREERS.map((item, key) => (
              <li key={key} onClick={() => triggerActionCareer(item)}>
                <button className='btn btn--settings'>{item}</button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div
        ref={ref_right}
        className={`sidebar--container sidebar--container-r ${
          openSidebarGroup ? "active" : ""
        }`}>
        <span
          className='icon--container icon--right'
          onClick={() =>
            setOpenSidebarGroup(openSidebarGroup => !openSidebarGroup)
          }>
          <FaWindowClose size={"100%"} color={"#bbb"} />
        </span>
        <nav>
          <ul
            className='sidebar--nav'
            onClick={() =>
              setOpenSidebarGroup(openSidebarGroup => !openSidebarGroup)
            }>
            {GROUP_BY.map((item, key) => (
              <li key={key} onClick={() => triggerActionGroup(item)}>
                <button className='btn btn--settings'>
                  {transformText(item)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
