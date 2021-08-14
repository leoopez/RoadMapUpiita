import React from "react"

import "./Main.css"
import DataUnits from "../data/learningUnits"

import Semester from "./Semester"

export default function Main() {
    const renderUnit = DataUnits.map((units,i) => <Semester key={i+1} units={units}/>)
    return <div className="main">{renderUnit}</div>
}