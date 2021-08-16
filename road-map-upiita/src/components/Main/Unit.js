import React from "react"
import "./Unit.css"
import { useUnit } from "../../Hooks/unit-provider-hook"

export default function Unit({name, credits, level}){
    const { unit, changeUnit} = useUnit();

    const onClick = name => unit === name? changeUnit(null):changeUnit(name);
    

    if(unit){
        return (
            <div className={`level--${level} unit ${name !== unit ? "unit--unselected" : ""}`} onClick={() => onClick(name)}>
                <p>{name}</p>
                <p>({credits[0]},{credits[1]})</p>
            </div>
        )
    }

    return (
        <div className={`level--${level} unit`} onClick={() => onClick(name)}>
            <p>{name}</p>
            <p>({credits[0]},{credits[1]})</p>
        </div>
    )
}