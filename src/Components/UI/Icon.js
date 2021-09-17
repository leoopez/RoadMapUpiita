/** @format */

import React from "react";

export default function Icon({ icon, cName = "" }) {
  return <span className={`icon--container ${cName}`}>{icon}</span>;
}
