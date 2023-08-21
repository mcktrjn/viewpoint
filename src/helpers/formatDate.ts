import { Language, Timestamp } from "../types";

export const formatDate = (timestamp: Timestamp, language: Language) => {
  if (timestamp?.seconds === -1) {
    return "Invalid";
  } else if (timestamp?.seconds) {
    const date = new Date(timestamp.seconds * 1000);
    const locales: Intl.LocalesArgument = language === "EN" ? "en-GB" : "pl-PL";
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    return date.toLocaleString(locales, options);
  }
};
