import React from "react"
import "./Semester.css"

import Unit from "./Unit"

export default function Semester({units}){
    const renderUnits = units.map((unit,i) => <Unit key={i} {...unit}/>)
    return <div className="semester">{renderUnits}</div>
}
