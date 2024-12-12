import { ListOfThings } from "./components/ListOfThings.tsx";

export function ParentToChild() {
  const items = [
    { id: 1, name: "Window" },
    { id: 2, name: "Furniture" },
    { id: 3, name: "Couch" },
  ];

  const title = "Lista zakupów";

  return (
    <>
      <h2>Relacja parent - child</h2>
      <h3 className="subtitle is-4 bold subtitle is-family-monospace">
        ParentToChild.tsx
      </h3>
      <div className="box">
        Tutaj przesyłamy do komponentu <code>ListOfThings</code> 2 rzeczy:
        <ul>
          <li>
            <code>title</code> - tytuł listy
          </li>
          <li>
            <code>items</code> - tablicę z rzeczami
          </li>
        </ul>
      </div>
      <ListOfThings heading={title} collection={items} />

      <hr />
      <blockquote>
        Komponent w roli <em>parent</em> komunikuje się z komponentem{" "}
        <em>child</em> za pomocą tzw. <em>props</em>
      </blockquote>
      <h4 className="mt-6">Przykład re-używalności rozwiązania:</h4>
      <ListOfThings
        heading="Test"
        collection={[
          { id: 1, name: "inline" },
          { id: 2, name: "array" },
        ]}
      />
    </>
  );
}
