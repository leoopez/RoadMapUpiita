/** @format */

import { useEffect, useState } from "react";

export default function useOnScreen(ref, rootMargin = "0px") {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref) {
      observer.observe(ref);
    }
    return () => {
      observer.unobserve(ref);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}