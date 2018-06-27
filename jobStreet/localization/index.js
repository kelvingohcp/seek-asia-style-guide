import { FlagMYIcon, FlagIDIcon, FlagPHIcon, FlagSGIcon, FlagVNIcon } from 'seek-asia-style-guide/react';

import enMyLocalisation from './en-my';
import enSgLocalisation from './en-sg';
import enPhLocalisation from './en-ph';
import enIdLocalisation from './en-id';
import enVnLocalisation from './en-vn';
import idIdLocalisation from './id-id';
import viVnLocalisation from './vi-vn';

const localization = {
  'en-my': enMyLocalisation,
  'en-sg': enSgLocalisation,
  'en-ph': enPhLocalisation,
  'en-id': enIdLocalisation,
  'en-vn': enVnLocalisation,
  'id-id': idIdLocalisation,
  'vi-vn': viVnLocalisation
};

export const getLocalization = ({ language, country }) => {
  return localization[`${language.toLowerCase()}-${country.toLowerCase()}`] ?
    localization[`${language.toLowerCase()}-${country.toLowerCase()}`] : {};
};

export const locales = [
  {
    title: 'Singapore (English)',
    ItemIcon: FlagSGIcon,
    url: 'https://www.jobstreet.com.sg/',
    language: 'en',
    country: 'sg',
    languageDisplay: 'English'
  }, {
    title: 'Malaysia (English)',
    ItemIcon: FlagMYIcon,
    url: 'https://www.jobstreet.com.my/',
    language: 'en',
    country: 'my',
    languageDisplay: 'English'
  }, {
    title: 'Philiphines (English)',
    ItemIcon: FlagPHIcon,
    url: 'https://www.jobstreet.com.ph/',
    language: 'en',
    country: 'ph',
    languageDisplay: 'English'
  }, {
    title: 'Indonesia (English)',
    ItemIcon: FlagIDIcon,
    url: 'https://www.jobstreet.co.id/en/',
    language: 'en',
    country: 'id',
    languageDisplay: 'English'
  }, {
    title: 'Indonesia (Bahasa)',
    ItemIcon: FlagIDIcon,
    url: 'https://www.jobstreet.co.id/',
    language: 'id',
    country: 'id',
    languageDisplay: 'Bahasa'
  }, {
    title: 'Việt Nam (Tiếng Việt)',
    ItemIcon: FlagVNIcon,
    url: 'https://www.jobstreet.vn/',
    language: 'vi',
    country: 'vn',
    languageDisplay: 'Tiếng Việt'
  }
];

export default localization;
