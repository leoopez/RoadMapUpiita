/** @format */

import { useEffect, useState } from "react";

export default function useFetchData(data) {
  const [error, setError] = useState();
  const [units, setUnits] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!data) return;
    setLoading(true);
    fetch(`json/${data}.json`)
      .then(res => res.json())
      .then(setUnits)
      .then(() => setLoading(false))
      .catch(setError);
  }, [data]);

  return { loading, error, units };
}
