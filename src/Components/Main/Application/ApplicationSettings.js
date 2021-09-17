/** @format */
import React, { useState } from "react";

import useClose from "../../../custom-hooks/useClose";

import { CAREERS, GROUP_BY } from "../../../config";
import { transformText } from "../../../utils/generals";

import { useApplication } from "./ApplicationContext";

export default function AplicationSettings() {
  const { career, group, triggerActionCareer, triggerActionGroup } =
    useApplication();

  const [openCareer, setOpenCareer] = useState(false);
  const [openGroup, setOpenGroup] = useState(false);

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
      <div>
        Agrupar por :
        <button
          className='btn ml'
          onClick={() => setOpenGroup(openSidebarGroup => !openSidebarGroup)}>
          {transformText(group) || (
            <span style={{ color: "#aaa" }}>Agrupar por:</span>
          )}
        </button>
        {openGroup &&
          GROUP_BY.map((item, key) => (
            <button key={key} className='btn ml'>
              {transformText(item) || (
                <span style={{ color: "#aaa" }}>Agrupar por:</span>
              )}
            </button>
          ))}
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
