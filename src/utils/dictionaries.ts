import { Locale } from "@/types/locales";
import "server-only";

type DictionariesType = {
  [key: Locale]: Function;
};

import dict from "@/dictionaries/en.json";

const dictionaries: DictionariesType = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  es: () => import("@/dictionaries/es.json").then((module) => module.default),
  fr: () => import("@/dictionaries/fr.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale): Promise<typeof dict> =>
  dictionaries[locale]();
