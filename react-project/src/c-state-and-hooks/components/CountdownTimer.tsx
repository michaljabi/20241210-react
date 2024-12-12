import { useEffect, useState } from "react";

const padZeros = (num: number) => String(num).padStart(2, "0");

export function CountdownTimer() {
  const [count, setCount] = useState(45);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => {
        if (c === 0) {
          clearInterval(intervalId);
          return c;
        }
        return c - 1;
      });
    }, 1000);
    // ważne, jak komponent zostanie wymontowany z DOM to uruchomi się ta funkcja — zwracana przez useEffect:
    return () => {
      // chcemy uruchomić clearInterval, żeby nie mieć "memory leak"
      clearInterval(intervalId);
    };

    // tablica dependency jest pusta, co oznacza że useEffect uruchomi się tylko raz
  }, []);

  return (
    <div className="has-background-warning-15 p-2 mt-3">
      00:00:{padZeros(count)}
    </div>
  );
}
