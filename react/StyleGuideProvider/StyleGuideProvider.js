import styles from './StyleGuideProvider.less';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Helmet from 'react-helmet';
import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly';
import jobsDBLocalization from './localization/jobsdb';
import jobStreetLocalization from './localization/jobstreet';
import Constants from '../Constants/Constants';
const { SEEKASIA, JOBSTREET } = Constants;

const defaultPageTitle = 'SEEK Asia Style Guide';

const getLocalisedPageTitle = (country, language, tenant) => {
  const brandLocalization =
    tenant === JOBSTREET ? jobStreetLocalization : jobsDBLocalization;
  const localeCode = `${language}-${country}`;

  if (brandLocalization && brandLocalization[localeCode]) {
    return brandLocalization[localeCode]['meta.title'];
  }
  return defaultPageTitle;
};

export const StyleGuideContext = React.createContext(
  {
    tenant: SEEKASIA
  } // default value
);

export default function StyleGuideProvider({
  fullScreen,
  children,
  meta,
  link,
  title,
  country,
  language,
  tenant,
  enableWebFont
}) {
  useEffect(() => {
    if (enableWebFont) {
      if (typeof window !== 'undefined') {
        const WebFont = require('webfontloader');
        WebFont.load({
          google: {
            families: ['Muli:300,400,600,700']
          }
        });
      }
    }
  }, []);

  const className = classnames({
    [styles.root]: true,
    [styles.fullScreen]: fullScreen
  });

  const pageTitle = title || getLocalisedPageTitle(country, language, tenant);

  return (
    <div className={className}>
      <Helmet title={pageTitle} meta={meta} link={link} />
      <ScreenReaderOnly component="div">
        <h1>{pageTitle}</h1>
      </ScreenReaderOnly>
      <StyleGuideContext.Provider value={{ tenant }}>
        {children}
      </StyleGuideContext.Provider>
    </div>
  );
}

StyleGuideProvider.propTypes = {
  fullScreen: PropTypes.bool,
  children: PropTypes.node,
  title: PropTypes.string,
  meta: PropTypes.array,
  link: PropTypes.array,
  country: PropTypes.string,
  language: PropTypes.string,
  tenant: PropTypes.string,
  enableWebFont: PropTypes.bool,
  baseHref: PropTypes.string
};

StyleGuideProvider.defaultProps = {
  fullScreen: false,
  meta: [],
  link: [],
  locale: 'AU',
  enableWebFont: false
};
