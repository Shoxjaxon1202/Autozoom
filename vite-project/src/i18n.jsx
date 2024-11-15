import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../public/locals/EN/en.json";
import ruTranslation from "../public/locals/RU/ru.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  ru: {
    translation: ruTranslation,
  },
};

// LocalStorage'dan tilni o'qib olish (agar mavjud bo'lsa)
const savedLanguage = localStorage.getItem("language") || "en"; // default uzbek

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage, // Saqlangan tilni yuklash
  fallbackLng: "en", // Til topilmasa default tilga qaytadi
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
