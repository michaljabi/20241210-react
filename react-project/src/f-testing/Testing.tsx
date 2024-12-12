import { TestMyBehaviourComponent } from "./components/TestMyBehaviourComponent.tsx";

export function Testing() {
  return (
    <>
      <h2>Podgląd komponentu do testowania</h2>
      <h3 className="subtitle is-4 bold subtitle is-family-monospace">
        Testing.tsx
      </h3>
      <div className="box">
        Abyśmy dobrze zrozumieli jak testować, osadźmy sobie tutaj komponent aby
        sprawdzić jak działa.
        <hr />
        <TestMyBehaviourComponent />
        <hr />
        Test jest przygotowany w pliku:{" "}
        <code>TestMyBehaviourComponent.spec.tsx</code>. Testy uruchamiamy z
        terminala komendą: <code>npm test</code>
        <hr />
        Zauważ, że testujemy tam zachowanie komponentu. To znaczy co by się z
        nim działo tak jakby użytkownik "po nim klikał". Nie interesuje nas w
        ogóle wewnętrzna logika komponentu.
        <blockquote className="mt-3">
          Logika komponentu może się zmieniać, jednak my musimy mieć pewność, że
          działa on zgodnie z naszymi oczekiwaniami. Testujemy go tak jakby to{" "}
          <em>User</em> z niego korzystał. Sprawdzamy jak się zachowuje.
        </blockquote>
      </div>
    </>
  );
}
