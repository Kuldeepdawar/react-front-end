import { useEffect } from "react";
import { useState } from "react";

export default function useLocalStroage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    let currentValue1;

    try {
      currentValue1 = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      console.log(error);
      currentValue1 = defaultValue;
    }

    return currentValue1;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
