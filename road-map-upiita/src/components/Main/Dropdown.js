/** @format */

import React, { useState } from "react";
import { useUnits } from "../../Hooks/unit-provider-hook";

import "./Dropdown.css";
export default function Dropdown() {
  const [isActive, setIsActive] = useState(false);

  const { mode, changeMode } = useUnits();
  const options = ["Semester", "Level"];

  return (
    <div className='dropdown'>
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
