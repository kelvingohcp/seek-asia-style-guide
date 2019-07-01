import React from 'react';
import PropTypes from 'prop-types';
import GlobalFooter from '../private/GlobalFooter/GlobalFooter';
import { getLocalization } from '../../jobsDB/localization';
import { getLocalList } from '../../jobsDB/helper';
import _get from 'lodash/get';

const Footer = ({
  language,
  country,
  isExpandedVersion,
  showHeaderActionTrayOffset,
  showCountryLanguage,
  domainUrl,
  ...restProps }) => {
  const messages = getLocalization({ country, language });
  const footerMessages = _get(messages, 'footer');

  if (footerMessages) {
    return (
      <GlobalFooter
        country={country}
        isExpandedVersion={isExpandedVersion}
        showHeaderActionTrayOffset={showHeaderActionTrayOffset}
        showCountryLanguage={showCountryLanguage}
        footerMessages={footerMessages}
        locales={getLocalList({ messages, domainUrl, country, language })}
        {...restProps}
      />
    );
  }
  return null;
};

Footer.defaultProps = {
  country: 'hk',
  language: 'en',
  domainUrl: 'jobsdb.com',
  hasCompanyProfile: true,
  showHeaderActionTrayOffset: true,
  isExpandedVersion: false,
  showCountryLanguage: true
};

Footer.propTypes = {
  country: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  domainUrl: PropTypes.string.isRequired,
  hasCompanyProfile: PropTypes.bool,
  showHeaderActionTrayOffset: PropTypes.bool,
  isExpandedVersion: PropTypes.bool,
  showCountryLanguage: PropTypes.bool
};

export default Footer;
