import React, {createContext, useContext, useState} from "react"

const UnitsContext = createContext();


export const useUnit = () => useContext(UnitsContext);

export default function UnitsProvider({ children}) {
    const [unit, setUnit] = useState(null)

    const changeUnit = unit => setUnit(unit);

    return (
        <UnitsContext.Provider value={{unit, changeUnit}}>
            {children}
        </UnitsContext.Provider>
    )
}