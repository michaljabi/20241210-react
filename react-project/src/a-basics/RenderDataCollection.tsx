export function RenderDataCollection() {
  const fruits = ["apples", "bananas", "mangoes", "cherries"];
  const users = [
    { uuid: "jdiqu82", name: "John", profession: "programmer" },
    { uuid: "12t3765", name: "Jane", profession: "artist" },
    { uuid: "qw13fg5", name: "Nora", profession: "politician" },
    { uuid: "ko926ge", name: "Arnold", profession: "astronaut" },
  ];
  return (
    <>
      <h2>Renderowanie kolekcji danych</h2>
      <h3 className="subtitle bold is-family-monospace">
        RenderDataCollection.tsx
      </h3>
      <div>
        W React stosujemy zapis z mapowaniem <code>Array</code> elementów, na
        elementy <code>JSX</code>
        <hr />
        Bazujemy tutaj na konwencji, że JSX może być tablicą zobacz:
        <pre>{["to", "renderuje", "się", "ok"]}</pre>
        <hr />
        Przykład z mapowaniem do <code>JSX</code>:
        <ul>
          {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
        <hr />
        Przykład bardziej <q>z życia wzięty</q>:
        <div className="panel">
          {users.map((u) => (
            <div
              key={u.uuid}
              className="panel-block is-display-flex is-justify-content-space-between"
            >
              {u.name}
              <span className="has-background-link-70 px-3 has-radius-rounded">
                {u.profession}
              </span>
            </div>
          ))}
        </div>
        lub nowocześniejszy zapis (destukturyzacja):
        <div className="panel">
          {users.map(({ uuid, name, profession }) => (
            <div
              key={uuid}
              className="panel-block is-display-flex is-justify-content-space-between"
            >
              {name}
              <span className="has-background-success-30 px-3 has-radius-rounded">
                {profession}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
