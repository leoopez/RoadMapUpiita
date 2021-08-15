import React from "react"

import "./Unit.css"

export default function Unit({name, credits, level}){
    return (
        <div className={`level--${level} unit`}>
            <p>{name}</p>
            <p>({credits[0]},{credits[1]})</p>
        </div>
    )
}