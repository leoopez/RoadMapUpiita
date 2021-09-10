/** @format */

import { useEffect, useState } from "react";

export default function useFetchData(data) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [units, setUnits] = useState([]);

  useEffect(() => {
    if (!data) return;
    fetch(`json/${data}.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(res => res.json())
      .then(setUnits)
      .then(setUnits)
      .then(setLoading(false))
      .catch(setError);
  }, [data]);

  return { loading, error, units };
}
