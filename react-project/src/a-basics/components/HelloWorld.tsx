// Ten sam sposób formatowania u wszystkich dzięki: prettier
// https://prettier.io/

import { Greetings } from "./Greetings.tsx";

export function HelloWorld() {
  return (
    <div>
      <h2> Hello world </h2>
      <strong> to mój pierwszy komponent </strong>
      <p>
        {" "}
        <Greetings />{" "}
      </p>
    </div>
  );
}
