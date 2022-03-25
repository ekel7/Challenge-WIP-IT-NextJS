import { Authors } from "../types/types";
import { v4 as uuid } from "uuid";

export const authorList: Authors = [
  {
    name: "Spielberg",
    id: uuid(),
  },
  {
    name: "Cameron",
    id: uuid(),
  },
  {
    name: "Kubrick",
    id: uuid(),
  },
];
