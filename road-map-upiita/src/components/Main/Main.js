import React, { createContext } from "react"

import "./Main.css"
import DataUnits from "../../data/learningUnits"

import Semester from "./Semester"

export default function Main() {
    const renderUnits = DataUnits.map((units,i) => <Semester key={i+1} semester={i+1} units={units}/>)
    return (
            <div className="main">
                {renderUnits}
            </div>
    )
}