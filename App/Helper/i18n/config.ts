
// import i18n from "i18next"
// import { initReactI18next } from "react-i18next";
// import en from './en'
// import gj from './gj'
// import fr from "./fr";
// import sp from "./sp";


// i18n
//   .use(initReactI18next)
//   .init({
//     lng: "en",
//     fallbackLng: "en",
//     debug: true,
//     interpolation: {
//       escapeValue: false,
//     },

//     resources: {
//       en: { translation: en },
//       gj: { translation: gj },
//       fr: { translation: fr },
//       sp: { translation: sp },
//     },
//   });

// export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import fr from './fr.json';
import sp from './sp.json';
import gj from './gj.json';

i18n.use(initReactI18next).init({
  lng: 'en',

  fallbackLng: 'en',

  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
  },

  resources: {
    en: { translation: en },
    gj: { translation: gj },
    fr: { translation: fr },
    sp: { translation: sp },
  },
});

export default i18n;
