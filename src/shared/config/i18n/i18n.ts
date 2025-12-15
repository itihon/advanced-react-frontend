import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const isDev = typeof __IS_DEV__ !== 'undefined' ? __IS_DEV__ : process.env.NODE_ENV === 'development';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: false,
    debug: isDev,
    load: 'languageOnly',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },

    react: {
      bindI18n: "languageChanged languageChanging",
    },
  });


export default i18n;