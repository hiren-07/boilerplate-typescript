import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import en from './en.json';
// Import translation files

i18next
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: __DEV__,
    
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en,
      },
    },
    react: {
      useSuspense: false,
    }
  });

export default i18next;