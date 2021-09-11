/** @format */

import React, { Fragment } from "react";

import "./UI.css";
export default function LoadingUnits({ career }) {
  console.log(career);
  return (
    <div
      className={`units-grid grid__container--center ${
        career ? "skeleton" : ""
      }`}>
      {[...Array(5)].map((__, it) => (
        <Fragment key={__}>
          <div className='group--number flex__container--center parent--space'>
            {it}
          </div>
          <div className='group flex__container--center'>
            {[...Array(10)].map(_ => (
              <div key={_} className='card'></div>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
}
