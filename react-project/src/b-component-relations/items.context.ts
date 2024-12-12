import { createContext } from "react";
import { ThingItem } from "./ThingItem.ts";

export const ItemsContext = createContext<ThingItem[]>([]);
