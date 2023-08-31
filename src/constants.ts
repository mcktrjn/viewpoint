import { Color, Expression, Language, Space, Symbol } from "./types";

export const colors: Record<Color, string> = {
  black: "#000",
  white: "#fff",
  primary10: "#001947",
  primary40: "#0657ce",
  primary90: "#dae2ff",
  neutral10: "#191b23",
  neutral40: "#5c5e67",
  neutral90: "#e1e2ec",
  neutral95: "#f0f0fa",
  neutral98: "#faf8ff",
  neutral99: "#fefbff",
};

export const expressions: Expression[] = [
  { character: "_", quantifier: 1, string: "_" },
  { character: "_", quantifier: 2, string: "__" },
  { character: "_", quantifier: 3, string: "___" },
];

export const languages: Language[] = ["EN", "PL"];

export const spaces: Record<Space, string> = {
  EMSP: " ",
  NBSP: " ",
  ZWSP: "​",
};

export const symbols: Record<Symbol, string> = {
  arrowDropDown: "arrow_drop_down",
  northEast: "north_east",
  translate: "translate",
};

export const headerHeight = 65;
