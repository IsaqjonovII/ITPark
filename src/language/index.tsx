import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { en, uz, ru } from "language/translations";

const resources = {
  uz: { home: uz },
  en: { home: en },
  ru: { home: ru },
};
i18next.use(initReactI18next).init({ resources, lng: "uz" });

export default i18next