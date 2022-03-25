import { Films } from "../types/types";
import { v4 as uuid } from "uuid";

export const FilmList: Films = [
  {
    id: uuid(),
    name: "The Social Network",
    rate: 8,
    author: {
      id: uuid(),
      name: "Cosme Fulanito",
    },
  },
  {
    id: uuid(),
    name: "Silicon Valley",
    rate: 9,
    author: {
      id: uuid(),
      name: "Cosme Fulanito",
    },
  },
  {
    id: uuid(),
    name: "Mr. Robot",
    rate: 8,
    author: {
      id: uuid(),
      name: "Cosme Fulanito",
    },
  },
  {
    id: uuid(),
    name: "Suits",
    rate: 7,
    author: {
      id: uuid(),
      name: "Cosme Fulanito",
    },
  },
  {
    id: uuid(),
    name: "WarGames",
    rate: 7,
    author: {
      id: uuid(),
      name: "Cosme Fulanito",
    },
  },
  {
    id: uuid(),
    name: "Cars",
    rate: 9,
    author: {
      id: uuid(),
      name: "Cosme Fulanito",
    },
  },
  {
    id: uuid(),
    name: "Ford v Ferrari",
    rate: 8,
    author: {
      id: uuid(),
      name: "Cosme Fulanito",
    },
  },
];
