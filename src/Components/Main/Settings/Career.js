/** @format */

import React, { useState } from "react";
import options from "./../../../data/Careers";
import useClose from "../../../Hooks/useClose";

export default function Dr({ mode, changeMode = f => f }) {
  const [open, toggle] = useState(false);
  const ref = useClose(false, toggle);

  return (
    <div ref={ref} className='dropdown'>
      <div className='dp-btn' onClick={() => toggle(!open)}>
        {mode}
      </div>
      {open && (
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
