/** @format */

import React, { useState } from "react";
import useClose from "../../../../hooks/useClose";
import { FaChevronRight } from "react-icons/fa";
import "./SettingsDropdown.css";

export default function SettingsDropdown({
  options,
  mode,
  changeMode = f => f,
  Iconleft,
  children,
}) {
  const [open, toggle] = useState(false);
  const ref = useClose(false, toggle);

  return (
    <li className='dropdown__settings'>
      <span className='icon--container'>{Iconleft}</span>
      <div ref={ref} className='dp--item'>
        <div className='dp-label' onClick={() => toggle(!open)}>
          {children}
          {mode}
        </div>
        {/* {open && (
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
        )} */}
      </div>
      <span className='icon--container icon--left'>
        <FaChevronRight />
      </span>
    </li>
  );
}
