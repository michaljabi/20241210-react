import { useEffect, useState } from "react";
import { CountdownTimer } from "./components/CountdownTimer.tsx";

export function UseEffect() {
  const [someText, setSomeText] = useState("");

  useEffect(() => {
    console.log("Fire Once, when LifecycleMethods mounted on DOM | Mounting");
    return () => {
      console.log(
        "Fire Once, when LifecycleMethods UNMOUNTED from DOM | Unmounting",
      );
    };
  }, []);

  useEffect(() => {
    console.log(
      'Fire N times, when LifecycleMethods "someText" prop updated | Updating',
    );
  }, [someText]);

  return (
    <>
      <h2>Efekty uboczne i lifecycle</h2>
      <h3 className="subtitle is-4 bold subtitle is-family-monospace">
        UseEffect.tsx
      </h3>
      <div className="box mb-3">
        Czasami chcemy mieć kontrolę nad momentem w którym komponent się
        wywołuje, zmienia stan lub jest odmontowywany z DOM.
        <blockquote className="mt-4">Sprawdź wywołania w konsoli</blockquote>
        Najlepiej - dla potrzeb tego przykładu, zakomentować{" "}
        <code>&lt;StrictMode&gt;</code> w pliku <code>main.tsx</code>, tak aby
        mieć pojedyńcze wywołania w konsoli
      </div>
      Zmieniaj tekst poniżej aby zobaczyć efekt w konsoli:
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="wpisz coś...."
          value={someText}
          onInput={(ev) => setSomeText((ev.target as HTMLInputElement).value)}
        />
      </div>
      <div className="box mt-4">
        W <code>useEffect</code> będziemy umieszczać wszelkie operacje
        asynchroniczne, co do których chcemy mieć pewność że np. zostaną
        wywołane tylko raz dla jednej instancji komponentu.
        <hr />
        Przykład implementacji z życia wziętej, countdown timer:
        <CountdownTimer />
      </div>
    </>
  );
}
