/** @format */

import React from "react";

import { CAREERS } from "../../../config";
import { Button } from "../../UI";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className='home-page'>
      <div className='home-page--header'>
        <h1 className='hp--title'>Road Map Upiita</h1>
        <p className='hp--text mt'>
          Unidades de Aprendizaje de las carreras impartidas por la Upiita
        </p>
      </div>
      <div className='home-page--content'>
        <div className='grid-container--center hp--careers'>
          {CAREERS.map((item, i) => (
            <Button key={i} cName='btn--career'>
              <Link to={item}>
                <h2>{item}</h2>
                <p></p>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
