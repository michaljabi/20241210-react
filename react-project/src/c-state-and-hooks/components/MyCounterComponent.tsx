import { useState } from "react";

export function MyCounterComponent() {
  const [count, setCount] = useState(1);

  // tzw. computed propery w React wygląda po prostu tak:
  const doubleCounter = count * 2;

  // Użycie funkcji setCount() powoduje wywołanie tego komponentu ponownie!
  // za każdym jednym setCount()...!!!
  // wiedząc to w prosty sposób możemy obliczać doubleCounter

  return (
    <div className="is-display-flex is-align-items-center mt-3">
      <button
        className="button is-outlined is-danger"
        onClick={() => setCount((c) => c - 1)}
      >
        ➖
      </button>
      <div className="mx-3">{count}</div>
      <button
        className="button is-outlined is-success"
        onClick={() => setCount((c) => c + 1)}
      >
        ➕
      </button>
      <button
        className="button is-outlined is-info mx-2"
        onClick={() => setCount(1)}
      >
        🗑️
      </button>
      ➡️ a wartość podwojona to: {doubleCounter}
    </div>
  );
}
