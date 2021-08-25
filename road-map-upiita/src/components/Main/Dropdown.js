/** @format */

import React, { useState, useEffect, useRef } from "react";

import "./Dropdown.css";

const options = ["Semester", "Level"];

export default function Dropdown({ mode, changeMode = f => f }) {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = e => {
      if (ref.current.contains(e.target)) return;
      setIsActive(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });
    return () =>
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
  }, []);

  return (
    <div ref={ref} className='dropdown'>
      <div className='dp-btn' onClick={() => setIsActive(!isActive)}>
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
                setIsActive(false);
              }}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
