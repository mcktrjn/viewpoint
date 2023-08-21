import { createContext } from "react";
import { Context as Props, Structure } from "./types";

export const Context = createContext<Props>({
  structure: {} as Structure,
  isLoading: true,
  sectionsRefs: "",
  sectionsPositions: [],
  setSectionsPositions: "",
  sectionsVisibility: [],
  texts: "",
});
