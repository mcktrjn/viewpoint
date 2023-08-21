import { printMessage } from "../helpers";
import { Language, Story } from "../types";

export const validateStory = (
  story: Story & { [key: string]: any }, // TODO: fix "any" type
  language: Language
) => {
  const { id } = story;

  const validateTwoNumbersArray = (key: string, isLanguage = false) => {
    const array = isLanguage ? story[key][language] : story[key];

    for (let i = 0; i < Math.max(2, array.length); i++) {
      let isWarningOrError = false;

      if (typeof array[i] === "undefined") {
        array[i] = -1;
        isWarningOrError = true;
        printMessage("warning", id, key, isLanguage ? language : undefined, String(i));
      } else if (typeof array[i] !== "number" || i > 1) {
        array[i] = -1;
        isWarningOrError = true;
        printMessage("error", id, key, isLanguage ? language : undefined, String(i));
      }

      if (i === Math.max(1, array.length - 1) && isWarningOrError) {
        isLanguage ? (story[key][language] = [-1, -1]) : (story[key] = [-1, -1]);
      }
    }
  };

  const validateMultipleStringsArray = (key: string) => {
    const array = story[key][language];

    for (let i = 0; i < Math.max(1, array.length); i++) {
      if (typeof array[i] === "undefined") {
        array[i] = "Undefined";
        printMessage("warning", id, key, language, String(i));
      } else if (typeof array[i] !== "string" || array[i] === "") {
        array[i] = "Invalid";
        printMessage("error", id, key, language, String(i));
      }
    }
  };

  for (const key in story) {
    const strings = ["imageSrc", "imageAlt", "author"];
    const nestedStrings = ["heading", "paragraph", "text"];
    const nestedArrays = ["decorationRange", "chips"];
    const objects = [...nestedStrings, ...nestedArrays];
    const keys = [...strings, "imagePosition", "date", ...objects];

    const isString = strings.includes(key);
    const isArray = key === "imagePosition";
    const isTimestamp = key === "date";
    const isNestedString = nestedStrings.includes(key);
    const isNestedArray = nestedArrays.includes(key);
    const isObject = objects.includes(key);
    const isKey = keys.includes(key);

    if (isKey) {
      if (isObject && story[key]?.constructor === Object) {
        if (isNestedArray && story[key][language]?.constructor === Array) {

          if (key === "decorationRange") validateTwoNumbersArray(key, true);
          else if (key === "chips") validateMultipleStringsArray(key);

        } else if (isNestedString && typeof story[key][language] === "string" && story[key][language] !== "") {
        } else if (typeof story[key][language] === "undefined") {
          story[key][language] = isNestedArray ? [] : "Undefined";
          printMessage("warning", id, key, language);
        } else {
          story[key][language] = isNestedArray ? [] : "Invalid";
          printMessage("error", id, key, language);
        }

      } else if (isArray && story[key]?.constructor === Array) {
        validateTwoNumbersArray(key);
      } else if (isString && typeof story[key] === "string" && story[key] !== "") {
      } else if (isTimestamp && story[key]?.seconds) {
      } else {
        if (isObject) story[key] = {};
        else if (isArray) story[key] = [];
        else if (isString) story[key] = "Invalid";
        else if (isTimestamp) story[key] = { seconds: -1, nanoseconds: -1 };
        printMessage("error", id, key);
      }
    }
  }

  return story;
}; // prettier-ignore
