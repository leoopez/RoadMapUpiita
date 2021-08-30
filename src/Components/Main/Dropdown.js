/** @format */

import React, { useState, useEffect, useRef } from "react";

import "./Dropdown.css";
import useToggle from "../../Hooks/toggle-provider-hook";
const options = ["Semester", "Level"];

export default function Dropdown({ mode, changeMode = f => f }) {
  const [isActive, toggle] = useToggle(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = e => {
      if (ref.current.contains(e.target)) return;
      toggle(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });
    return () =>
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
  }, [toggle]);

  return (
    <div ref={ref} className='dropdown'>
      <div className='dp-btn' onClick={() => toggle(!isActive)}>
        {mode}
      </div>
      {isActive && (
        <div className='dp-content'>
          {options.map((option, i) => (
            <div
              className='dp-item'
              key={i}
              onClick={() => {
                changeMode(option);
                toggle(false);
              }}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
