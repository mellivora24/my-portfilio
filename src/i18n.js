import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import viTranslation from './locales/vi/translation.json';

i18n
  .use(initReactI18next) // Kết nối i18next với React
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      vi: {
        translation: viTranslation,
      },
    },
    fallbackLng: 'en', // Ngôn ngữ mặc định nếu không phát hiện được
    interpolation: {
      escapeValue: false, // React đã tự động thoát ký tự
    },
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'], // Thứ tự ưu tiên phát hiện ngôn ngữ
      caches: ['localStorage', 'cookie'], // Lưu ngôn ngữ đã chọn
    },
  });

export default i18n;