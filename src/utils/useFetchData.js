/** @format */

import { useEffect, useState } from "react";
// import { saveJSON, loadJSON } from "./useSaveLocalData";
import { URL_FETCH_DATA } from "../config";

export default function useFetchData(data) {
  const [error, setError] = useState();
  const [units, setUnits] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async data => {
      try {
        setLoading(true);
        console.log(URL_FETCH_DATA(data));

        const results = await fetch(URL_FETCH_DATA(data));
        const json = await results.json();

        // if(result)

        setUnits(json);
        setLoading(false);
      } catch (err) {
        setError(true);
      }
    };

    fetchData(data);
  }, [data]);

  return { loading, error, units };
}
