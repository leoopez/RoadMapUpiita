/** @format */

import { useEffect, useRef } from "react";

//Close any component if click on body
export default function useClose(closeValue, change = f => f) {
  const ref = useRef();
  useEffect(() => {
    const onBodyClick = e => {
      if (ref.current.contains(e.target)) return;
      change(closeValue);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });
    return () =>
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
  });

  return ref;
}
