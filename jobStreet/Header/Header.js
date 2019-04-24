import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.less';
import { Header as GlobalHeader } from 'seek-asia-style-guide/react';
import Logo from '../Logo/Logo';
import { PortalIcon, CompanyIcon, EducationIcon } from 'seek-asia-style-guide/react';
import { getLocalization, locales } from '../localization';
import _get from 'lodash/get';

const getJobStreetProps = ({ country, language }) => {
  const messages = getLocalization({ country, language });
  const headerMessage = _get(messages, 'header');

  const links = [
    { ..._get(headerMessage, 'myJobStreet'), ItemIcon: PortalIcon },
    { ..._get(headerMessage, 'companyProfiles'), ItemIcon: CompanyIcon },
    { ..._get(headerMessage, 'education'), ItemIcon: EducationIcon }
  ];

  return {
    links,
    headerMessage,
    locales,
    menuMessage: _get(messages, 'menu')
  };
};

const Header = ({ country, language, activeTab, loginAvailable = false, ...restProps }) => {
  return (
    <GlobalHeader
      LogoComponent={Logo}
      logoProps={{ country }}
      activeTab={activeTab}
      loginAvailable={loginAvailable}
      {...getJobStreetProps({ country, language })}
      brandStyles={styles}
      locales={locales}
      country={country}
      language={language}
      {...restProps}
    />
  );
};

Header.propTypes = {
  country: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  activeTab: PropTypes.string,
  loginAvailable: PropTypes.bool
};

export default Header;
