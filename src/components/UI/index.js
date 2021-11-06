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

export function ErrorHandler() {
  return (
    <div>
      <h2>Error al Obtener los datos</h2>
    </div>
  );
}
