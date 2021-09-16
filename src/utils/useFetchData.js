/** @format */

import { useEffect, useState } from "react";
// import { saveJSON, loadJSON } from "./useSaveLocalData";
import { URL_FETCH_DATA } from "../config";
export default function useFetchData(data) {
  const [error, setError] = useState();
  const [units, setUnits] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async data => {
        try {
          const res = await fetch(URL_FETCH_DATA(data));
          const resJson = await res.json();
          setUnits(resJson);
          setLoading(false);
        } catch (err) {
          setError(err);
        }
      };
      getData(data);
    
  }, [data]);

  return { loading, error, units };
}
