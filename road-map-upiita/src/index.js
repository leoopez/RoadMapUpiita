import React from "react"
import { render } from "react-dom"
import OptionProvider from "./Hooks/option-provider.hook";
import App from "./Components/App";

render(
  <OptionProvider>
    <App />
  </OptionProvider>,
  document.getElementById("root")
);