/** @format */

import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import RoadMap from "./RoadMap/RoadMap";

export default function Main() {
  return (
    <main className='flex-container flex-container--center main'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Mecatronica' element={<RoadMap career='Mecatronica' />} />
        <Route path='/Telematica' element={<RoadMap career='Telematica' />} />
        <Route path='/Bionica' element={<RoadMap career='Bionica' />} />
        <Route path='/Energia' element={<RoadMap career='Energia' />} />
        <Route path='/ISISA' element={<RoadMap career='ISISA' />} />
        <Route path='*' element={<RoadMap />} />
      </Routes>
    </main>
  );
}
