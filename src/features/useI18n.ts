import { useContext } from "react";
import { I18nContext } from "./I18nProvider";
import type { I18nApi } from "./useI18n";

export function useI18n(): I18nApi {
  return useContext(I18nContext);
}
