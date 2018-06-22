export const sortCurrentLocaleToTop = ({ locales, country, language }) => {
  const currentLocale = locales.filter(locale => {
    return locale.country === country && locale.language === language;
  });

  const localeWithDiffLang = locales.filter(locale => {
    return ((locale.country === country) && !(locale.language === language));
  });

  const otherLocales = locales.filter(locale => {
    return !(locale.country === country);
  });

  return [
    ...currentLocale,
    ...localeWithDiffLang,
    ...otherLocales
  ];
};
