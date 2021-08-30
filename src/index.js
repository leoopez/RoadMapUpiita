/** @format */

import React from "react";
import { render } from "react-dom";
import App from "./Components/App";
// import firebaseConfig from "./firebase-config";
// import { FirebaseAppProvider } from "reactfire";

render(
  //   <FirebaseAppProvider firebaseConfig={firebaseConfig}>
  // <Suspense fallback={"Conectando la app"}>
  <App />,
  // </Suspense>
  //   {/* </FirebaseAppProvider>, */}
  document.getElementById("root")
);
