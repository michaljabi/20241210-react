import { useRef } from "react";

export function UseRef() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <h2>Referencje DOM</h2>
      <h3 className="subtitle is-4 bold subtitle is-family-monospace">
        UseRef.tsx
      </h3>
      <div className="box">
        Wszędzie tam gdzie potrzebujemy natywnej referencji do DOM, np. żeby
        wywołać metodę <code>.focus()</code> na tym inpucie:
        <div className="control my-3">
          <input className="input" ref={inputRef} />
        </div>
        <div>
          Za pomocą tego przycisku{" "}
          <button
            className="button is-small"
            onClick={() => inputRef.current?.focus()}
          >
            zrób focus
          </button>
        </div>
        <hr />
        Zwróć uwagę na API, do referencji faktycznie dostajemy się za pomocą{" "}
        <code>inputRef.current</code> + początkowo (jak nie ma jeszcze
        osadzonego komponentu) jej wartość to <code>null</code>
      </div>
    </>
  );
}
