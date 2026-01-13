import {en} from './en';
import {es} from './es';

export const translations = {es, en}; 
export type Language = keyof typeof translations; 