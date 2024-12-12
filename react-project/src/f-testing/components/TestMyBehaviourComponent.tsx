import { useState } from "react";

const mapCount = (value: number) => {
  switch (value) {
    case 0:
      return "zero lajków";
    case 1:
      return "1 lajka";
    case 2:
    case 3:
    case 4:
      return `${value} lajki`;
    default:
      return `${value} lajków`;
  }
};

export function TestMyBehaviourComponent() {
  const [count, setCount] = useState(0);

  const handleCounterAdd = (value: number) => {
    setCount((c) => {
      if (c + value < 0) {
        return 0;
      }
      return c + value;
    });
  };

  return (
    <div>
      <h4>Witaj, na ten moment masz {mapCount(count)}</h4>
      <fieldset style={{ textAlign: "center" }}>
        <button
          className="button"
          title="I like"
          onClick={() => handleCounterAdd(1)}
        >
          👍
        </button>
        <button
          className="button"
          title="I dislike"
          onClick={() => handleCounterAdd(-1)}
        >
          👎
        </button>
      </fieldset>
    </div>
  );
}
