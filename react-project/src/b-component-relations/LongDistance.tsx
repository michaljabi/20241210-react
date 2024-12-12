import { ComponentJustToMakeDistance } from "./components/ComponentJustToMakeDistance.tsx";
import { ThingItem } from "./ThingItem.ts";
import { ItemsContext } from "./items.context.ts";

export function LongDistance() {
  const itemsToSend: ThingItem[] = [
    { id: 1, name: "lista" },
    { id: 2, name: "z" },
    { id: 3, name: "komponentu" },
    { id: 4, name: "LongDistance" },
  ];

  return (
    <ItemsContext.Provider value={itemsToSend}>
      <h2>Daleka odległość - Context</h2>
      <h3 className="subtitle is-4 bold subtitle is-family-monospace">
        LongDistance.tsx
      </h3>
      <div className="box">
        Może zdarzyć się taka sytuacja że nie mamy bezpośredniej relacji{" "}
        <code>parent - child</code>, wtedy możemy wykorzystać hook:{" "}
        <code>useContext</code> + <code>Context API</code> do przesłania danych
        na dalekie odległości
      </div>

      <ComponentJustToMakeDistance />

      <blockquote className="mt-6">
        Zwróć uwagę na użycie:{" "}
        <code> &lt;ItemsContext.Provider value={"{items}"} &gt; </code>
        otaczającego ten komponent, w komponencie{" "}
        <code> &lt;DataReceiver&gt; </code> używamy hooka{" "}
        <code>useContext</code> aby odebrać <code>itemsToSend</code>
      </blockquote>
    </ItemsContext.Provider>
  );
}
