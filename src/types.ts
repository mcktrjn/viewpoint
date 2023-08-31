export type Card = {
  className?: string;
  size?: "large" | "small";
  imageSrc: string;
  imageAlt: string;
  imagePosition?: number[];
  author: string;
  date: string;
  heading: string;
  decorationRange?: number[];
  icon?: Symbol;
  paragraph: string;
  paragraphLength?: number;
  chips: string[];
};

export type Color =
  | "black"
  | "white"
  | "primary10"
  | "primary40"
  | "primary90"
  | "neutral10"
  | "neutral40"
  | "neutral90"
  | "neutral95"
  | "neutral98"
  | "neutral99";

// TODO: fix "any" types
export type Context = {
  structure: Structure;
  isLoading: boolean;
  sectionsRefs: any;
  sectionsPositions: number[];
  setSectionsPositions: any;
  sectionsVisibility: boolean[];
  texts: any;
};

export type Expression = {
  character: "_";
  quantifier: 1 | 2 | 3;
  string: "_" | "__" | "___";
};

export type Language = "EN" | "PL";

export type Space = "EMSP" | "NBSP" | "ZWSP";

export type Story = {
  id: string;
  index: number;
  name: string;
  path: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: number[];
  author: string;
  date: Timestamp;
  heading: { [key in Language]: string };
  decorationRange: { [key in Language]: number[] };
  paragraph: { [key in Language]: string };
  chips: { [key in Language]: string[] };
  text: { [key in Language]: string };
};

export type Structure = {
  name: string;
  sections: {
    name: string;
    path: string;
    element: React.ReactElement;
    subpages?: {
      index: number;
      name: string;
      path: string;
      sections: {
        element: React.ReactElement;
      }[];
    }[];
  }[];
};

export type Symbol = "arrowDropDown" | "northEast" | "translate";

export type Timestamp = {
  seconds: number;
  nanoseconds: number;
};
