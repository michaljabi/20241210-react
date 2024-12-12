import { FormEvent, useState } from "react";

export function SampleInput() {
  const [value, setValue] = useState("hello");

  const updateValue = (ev: FormEvent) => {
    if (ev.target instanceof HTMLInputElement) {
      setValue(ev.target.value);
    }
  };

  return (
    <>
      <h2>Przykładowy input</h2>
      <h3 className="subtitle is-4 bold subtitle is-family-monospace">
        SampleInput.tsx
      </h3>
      <hr />
      Wpisując tutaj...
      <input
        className="control input mb-2"
        value={value}
        onInput={updateValue}
      />
      ... aktualizuje też tutaj, i na odwrót.
      <input
        className="control input mb-5"
        value={value}
        onInput={updateValue}
      />
      tutaj wpisano:
      <blockquote>{value}</blockquote>
    </>
  );
}
