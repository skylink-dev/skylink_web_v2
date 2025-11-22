import en from "@/locales/en.json";
import ta from "@/locales/ta.json";
import hi from "@/locales/hi.json";

const dictionaries = { en, ta, hi };

export function getDictionary(lang) {
  return dictionaries[lang] || dictionaries.en;
}
