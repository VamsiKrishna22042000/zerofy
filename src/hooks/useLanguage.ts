import { useTranslation } from 'react-i18next';

export const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
];

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    localStorage.setItem('language', languageCode);
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === i18n.language) || languages[0];
  };

  const getFontClass = () => {
    switch (i18n.language) {
      case 'te':
        return 'font-telugu';
      case 'hi':
        return 'font-hindi';
      case 'en':
        return 'font-inter';
      default:
        return 'font-inter';
    }
  };

  return {
    currentLanguage: i18n.language,
    changeLanguage,
    getCurrentLanguage,
    getFontClass,
    languages,
  };
};