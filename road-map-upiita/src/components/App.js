/** @format */

import React from "react";

import "./App.css";

import UnitProvider from "../Hooks/unit-provider-hook";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

export default function App() {
  return (
    <div className='app'>
      <Header />
      <UnitProvider>
        <Main />
      </UnitProvider>
      <Footer />
    </div>
  );
}
