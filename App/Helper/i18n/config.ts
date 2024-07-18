
import i18n from "i18next"
import { initReactI18next } from "react-i18next";
import en from './../languages/en'
import gj from './../languages/gj'
import fr from "../languages/fr";
import sp from "../languages/sp";


i18n
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    debug: true,
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