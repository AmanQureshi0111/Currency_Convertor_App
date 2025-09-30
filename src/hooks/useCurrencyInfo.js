// hooks/useCurrencyInfo.js
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    // Free API, supports latest rates
    fetch(`https://api.frankfurter.app/latest?from=${currency}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("API Response:", res); // debug
        setData(res.rates || {}); // store rates
      })
      .catch((err) => console.error("Error fetching currency data:", err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
