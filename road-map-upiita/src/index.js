import React from "react"
import { render } from "react-dom"
import UnitsProvider from "./Hooks/unit-provider-hook"
import App from "./Components/App"


render(
    <UnitsProvider>
        <App />
    </UnitsProvider>,
    document.getElementById('root'))