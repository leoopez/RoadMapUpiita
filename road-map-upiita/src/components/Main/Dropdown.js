import React, {useState} from "react"
import { ReactComponent as DropdownIcon} from "../../static/icons/menu_black_24dp.svg"
import { ReactComponent as ExpandLessIcon} from "../../static/icons/expand_less_black_24dp.svg"
import { ReactComponent as ExpandMoreIcon} from "../../static/icons/expand_more_black_24dp.svg"
import { ReactComponent as SelectedIcon} from "../../static/icons/circle_black_24dp.svg"


import "./Dropdown.css"

const schools =[
    "Mecatronica",
    "Telematica",
    "Bionica",
    "en Energia",
]

export default function Dropdown(){
    const [open, setOpen] = useState(true)
    const [school, setSchool] = useState(0)

    return (
        <div className="dropdown">
            <div className="current--selected dropdown--item">
                <span>Ingenieria {schools[school]}</span>
                <span onClick={() => setOpen(!open)} className={`icon--dropdown ${ open ? "active":""}`}>{<DropdownIcon />}</span>
            </div>
            { open && <Navbar school={school} setSchool={setSchool}/>}
        </div>
    )
}

function Navbar({school,setSchool=f=>f}) {

    const renderedNavbarItems = schools.map((name,i) => <NavbarItem key={i} name={name} selected={i} school={school} setSchool={setSchool}/>)

    return (
        <div className="navbar">
            <ul className="navbar-nav">
                {renderedNavbarItems}
            </ul>
        </div>
    )
}

function NavbarItem({ name, selected, school , setSchool =f=>f}) {
    return (
        <li className={`dropdown--item ${selected === school? "active":""}`} onClick={() => setSchool(selected)}>
            <span>{name}</span>
        </li>
    )
}