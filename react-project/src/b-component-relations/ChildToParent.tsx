import { ChangeNameButton } from "./components/ChangeNameButton.tsx";

export function ChildToParent() {
  const handleChangeName = (newName: string) => {
    alert(`Nowe imię to: ${newName}`);
  };

  return (
    <>
      <h2>Relacja child - parent</h2>
      <h3 className="subtitle is-4 bold subtitle is-family-monospace">
        ChildToParent.tsx
      </h3>
      <div className="box">
        Tutaj przesyłamy do komponentu <code>ChangeNameButton</code> callback do
        propsa:
        <code>onNameChange</code>. Możemy to zrobić na 2 sposoby:{" "}
        <em>inline</em> bezpośrednio w <code>JSX</code> albo używając
        pomocniczej funkcji np. <code>handleChangeName</code>
      </div>
      <div>
        <ChangeNameButton
          onNameChange={(newName: string) => {
            console.log(newName);
          }}
        />
        <ChangeNameButton onNameChange={handleChangeName} />
      </div>
      <blockquote>Sprawdź wynik działania również w konsoli!</blockquote>
    </>
  );
}
