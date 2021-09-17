/** @format */

import React from "react";

export default function Button({ inner, cName = "" }) {
  return <button className={`btn ${cName}`}>{inner}</button>;
}
