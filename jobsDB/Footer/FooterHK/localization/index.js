import enHkLocalisation from './en-hk';

const localization = {
  'en-hk': enHkLocalisation
};

export const getLocalization = ({ language, country }) => {
  return localization[`${language.toLowerCase()}-${country.toLowerCase()}`] ?
    localization[`${language.toLowerCase()}-${country.toLowerCase()}`] : {};
};

export default localization;
