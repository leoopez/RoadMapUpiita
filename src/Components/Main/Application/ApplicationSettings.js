/** @format */
import React, { useState } from "react";

import useClose from "../../../custom-hooks/useClose";

import { CAREERS } from "../../../config";

import { useApplication } from "./ApplicationContext";

export default function AplicationSettings() {
  const { career, triggerActionCareer } = useApplication();

  const [openCareer, setOpenCareer] = useState(false);

  const ref = useClose(false, setOpenCareer);

  return (
    <>
      <div className='flex-container settings'>
        <button
          className='btn btn--settings'
          onClick={() => setOpenCareer(openCareer => !openCareer)}>
          {career || <span style={{ color: "#aaa" }}>Carrera</span>}
        </button>
      </div>
      <div
        ref={ref}
        className={`sidebar--container sidebar--container-l ${
          openCareer ? "active" : ""
        }`}>
        <nav>
          <ul
            className='sidebar--nav'
            onClick={() => setOpenCareer(openCareer => !openCareer)}>
            {CAREERS.map((item, key) => (
              <li key={key} onClick={() => triggerActionCareer(item)}>
                <button className='flex-container flex-container--center btn btn--settings'>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

/* 
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
                <button className='flex-container flex-container--center btn'>
                  {transformText(item)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div> */
