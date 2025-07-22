import en from "./en.json";
import uk from "./uk.json";

export const getDictionary = (locale) => {
  switch (locale) {
    case "uk":
      return uk;
    default:
      return en;
  }
};
