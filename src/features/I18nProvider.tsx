import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { I18nApi } from "./types/i18n"; // use the separate type file
import type { Language } from "../i18n";
import { translations } from "../i18n";

// Create context with default dummy values
const I18nContext = createContext<I18nApi>({
  t: (key: string) => key,
  lang: "en",
  setLang: () => {},
});

type I18nProviderProps = {
  children: ReactNode;
  defaultLanguage?: Language;
};

// Provider component
export function I18nProvider({
  children,
  defaultLanguage = "en",
}: I18nProviderProps) {
  const [lang, setLang] = useState<Language>(defaultLanguage);

  // Type-safe lookup internally, but function matches I18nApi
  const t: I18nApi["t"] = (key: string) =>
    translations[lang][key as keyof typeof translations["en"]] ?? key;

  return (
    <I18nContext.Provider value={{ t, lang, setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

// Hook for components to consume i18n context
export function useI18n(): I18nApi {
  return useContext(I18nContext);
}
