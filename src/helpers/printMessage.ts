export const printMessage = (
  type: "warning" | "error",
  id: string,
  key: string,
  language?: string,
  index?: string
) => {
  let text = `${key}`;

  if (language && index) {
    text = `${text}[${language}][${index}]`;
  } else if (language) {
    text = `${text}[${language}]`;
  } else if (index) {
    text = `${text}[${index}]`;
  }

  text = `${text} (${id})`;

  if (type === "warning") {
    console.warn(`Undefined ${text}`);
  } else {
    console.error(`Invalid ${text}`);
  }
};
