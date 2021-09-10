/** @format */

import React, { useState } from "react";
import useClose from "../../hooks/useClose";
import { FaAngleRight } from "react-icons/fa";
import "./SettingsDropdown.css";

export default function Dropdown({ options, mode, changeMode = f => f }) {
  const [open, toggle] = useState(false);
  const ref = useClose(false, toggle);

  return (
    <nav>
      <div ref={ref} className='dropdown'>
        <div className='dp-label' onClick={() => toggle(!open)}>
          {mode}
          <span className={open ? "open" : null}>
            <FaAngleRight />
          </span>
        </div>
        {open && (
          <ul>
            {options.map((option, i) => (
              <li
                className='dp-item'
                key={i}
                onClick={() => {
                  changeMode(option);
                  toggle(false);
                }}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
