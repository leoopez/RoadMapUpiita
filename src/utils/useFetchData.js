/** @format */

import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useFetchData(data) {
  const [error, setError] = useState();
  const [units, setUnits] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3001/${data}`)
      .then(res => res.json())
      .then(setUnits)
      .then(() => setLoading(false))
      .catch(setError);
  }, [data]);

  return { loading, error, units };
}
