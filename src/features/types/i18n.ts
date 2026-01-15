// src/features/types/i18n.ts
import type { Language } from "../../i18n";

export type I18nApi = {
  t: (key: string) => string;
  lang: Language;
  setLang: (lang: Language) => void;
};
