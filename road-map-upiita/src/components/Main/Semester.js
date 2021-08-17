import React from "react"
import "./Semester.css"

import Unit from "./Unit"

export default function Semester({units, semester}){
    console.log(units)
    const renderUnits = units.map((unit, i) => <Unit key={i} {...unit}/>)
    return (
        <div className="semester">
            <span className="semester--unit">{semester}</span>  
            {renderUnits}
        </div>
    )
}
