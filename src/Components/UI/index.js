/** @format */

import React from "react";

export function Button({ children, cName = "" }) {
  return <button className={`btn ${cName}`}>{children}</button>;
}

export function Icon({ children, cName = "", onClick = f => f }) {
  return (
    <span onClick={onClick} className={`icon--container ${cName}`}>
      {children}
    </span>
  );
}
