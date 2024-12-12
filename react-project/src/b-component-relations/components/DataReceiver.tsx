import { ListOfThings } from "./ListOfThings.tsx";
import { useContext } from "react";
import { ItemsContext } from "../items.context.ts";

export function DataReceiver() {
  const itemsFromLongDistance = useContext(ItemsContext);

  return (
    <section>
      <ListOfThings
        heading="Inna lista z rzeczami z daleka"
        collection={itemsFromLongDistance}
      />
    </section>
  );
}
