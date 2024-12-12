import { useState } from "react";
import { MyCounterComponent } from "./components/MyCounterComponent.tsx";

export function UseState() {
  const [text, setText] = useState("Zmień mnie");
  // Początkowa watość text to "Zmień mnie"
  // po kliknięciu w button zmienimy to na "teraz to się zmieniło..."

  return (
    <>
      <h2>Stan danych</h2>
      <h3 className="subtitle is-4 bold subtitle is-family-monospace">
        UseState.tsx
      </h3>
      <div className="box">
        Do tej pory wszystkie dane, które wyświetlaliśmy były statyczne. Nie
        zmieniały się np. po kliknięciu w przycisk.
        <hr />
        Spróbujmy coś zmienić np. tekst tutaj:
        <div className="notification my-3">{text}</div>
        Po kliknięciu w przycisk:
        <div>
          <button
            className="button is-info"
            onClick={() => setText("teraz to się zmieniło...")}
          >
            {" "}
            Zmiana !
          </button>
        </div>
        <hr />
        Używamy tutaj <code>useState</code> hook'a. Który służy do zmiany tzw.
        "stanu" komponentu. Stanem określamy wszelkie dane które mogą zmieniać
        się w czasie. Możemy je zmieniać za pomocą specjalnej dedykowanej
        funkcji w układzie:
        <div className="notification my-3">
          <code>const [wartość, setWartość] = useState(stanPoczątkowy)</code>
        </div>
        <hr />
        Inny przykład:
        <MyCounterComponent />
      </div>
    </>
  );
}
