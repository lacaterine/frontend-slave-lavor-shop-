import {useState} from 'react';
import type {Language} from '../i18n';
import {translations} from '../i18n';

export function useI18n(defaultLanguage: Language = 'en'){
    const [lang, setLang] = 
        useState<Language>(defaultLanguage);
    const t = (key: string) =>
        translations[lang][key as keyof typeof 
            translations[Language]] ?? key;
    return { t, lang, setLang };
}
