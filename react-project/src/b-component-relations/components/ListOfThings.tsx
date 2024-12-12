import { ThingItem } from "../ThingItem.ts";

interface Props {
  heading: string;
  collection?: ThingItem[];
}

/*
 * Dzięki 2 propsom:
 * - collection
 * - heading
 *
 * ten komponent staje się re-używalny, może wyświetlać różne listy rzeczy o innych zawartościach i tytułach
 * */
export function ListOfThings({ collection = [], heading }: Props) {
  return (
    <div className="panel is-info">
      <div className="panel-heading">{heading}</div>
      {collection.map((c) => (
        <div className="panel-block" key={c.id}>
          {" "}
          {c.name}{" "}
        </div>
      ))}
    </div>
  );
}
