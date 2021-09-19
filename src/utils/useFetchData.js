/** @format */

import { useEffect, useState } from "react";
// import { saveJSON, loadJSON } from "./useSaveLocalData";
import { URL_FETCH_DATA } from "../config";
export default function useFetchData(data) {
  const [error, setError] = useState();
  const [units, setUnits] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(URL_FETCH_DATA(data))
      .then(res => res.json())
      .then(setUnits)
      .then(() => setLoading(false))
      .catch(e => {
        console.log(e);
        setError(e);
      });
    
  }, [data]);

  return { loading, error, units };
}
