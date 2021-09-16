/** @format */

import React from "react";

import { Routes, Route } from "react-router-dom";
import Index from "./Application";

import Home from "./Home/Home";
import Whoops404 from "./Whoops";

export default function Main() {
  return (
    <main className='flex-container flex-container--center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inicio' element={<Home />} />
        <Route path='/upiita' element={<Index />} />
        <Route path='*' element={<Whoops404 />} />
      </Routes>
    </main>
  );
}
