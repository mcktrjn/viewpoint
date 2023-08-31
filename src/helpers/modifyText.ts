import { expressions, spaces } from "../constants";
import { Expression } from "../types";

const testString = (expression: string, character: string) => {
  const regex = new RegExp(expression);
  return regex.test(character);
};

const matchString = (
  text: string,
  character: Expression["character"],
  quantifier: Expression["quantifier"]
) => {
  const expression = `(^|[^${character}])${character}{${quantifier}}([^${character}]|$)`; // (^|[^_])_{1}([^_]|$)
  const regex = new RegExp(expression, "g");
  return text.match(regex);
};

export const modifyText = (text: string, length = 9999) => {
  const words = text.replace(/\\n/g, "\n").split(" ");
  let modifiedText = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const wordWithoutSpecialCharacters = word.replace(/[_[]/g, "");
    const wordLastCharacter = word.slice(-1);
    const previousWordLastCharacter = words[i - 1] ? words[i - 1].slice(-1) : "";
    const nextWordLastCharacter = words[i + 1] ? words[i + 1].slice(-1) : "";

    if ((modifiedText + word).length <= length) {
      if (
        ((wordWithoutSpecialCharacters.length <= 2 || testString("[.!?]", previousWordLastCharacter)) && testString("[^\n#>-]", wordLastCharacter)) ||
        testString("[.!?]", nextWordLastCharacter)
      ) {
        modifiedText += word + spaces.NBSP;
      } else {
        modifiedText += word + " ";
      }
    } else {
      modifiedText = modifiedText.trim();
      break;
    }
  } // prettier-ignore

  if (text.length <= length) return modifiedText;

  for (let i = 0; i < expressions.length; i++) {
    const { character, quantifier, string } = expressions[i];
    const matches = matchString(modifiedText, character, quantifier);
    const isMatchesNumberEven = matches ? matches.length % 2 === 0 : true;
    if (!isMatchesNumberEven) modifiedText += string;
  }

  const modifiedTextLastCharacter = modifiedText.slice(-1);

  return testString("[^\\wąćęłńóśźż#>-]", modifiedTextLastCharacter)
    ? `${modifiedText.slice(0, -1)}...`
    : `${modifiedText}...`;
};
