import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.less';
import { Header as GlobalHeader } from 'seek-asia-style-guide/react';
import Logo from '../Logo/Logo';
import { getLocalization } from '../localization';
import { AUTHENTICATED, UNAUTHENTICATED, AUTH_PENDING } from '../../react/private/authStatusTypes';
import { getJobsDBHeaderProps, getLocalList } from '../helper';
import _get from 'lodash/get';

const Header = ({ country = 'hk', language = 'en', activeTab, loginAvailable = false, authenticationStatus = UNAUTHENTICATED, userName, domainUrl, currentPage, ...restProps }) => {
  const messages = getLocalization({ country, language });
  return (
    <GlobalHeader
      LogoComponent={Logo}
      activeTab={activeTab}
      loginAvailable={loginAvailable}
      {...getJobsDBHeaderProps({ country, domainUrl, authenticationStatus, headerMessage: _get(messages, 'header'), styles })}
      menuMessage={_get(messages, 'menu')}
      locales={getLocalList({ messages, currentPage, domainUrl, country, language })}
      brandStyles={styles}
      country={country}
      language={language}
      employerSite={(authenticationStatus === UNAUTHENTICATED) || loginAvailable}
      userName={userName}
      authenticationStatus={authenticationStatus}
      homeUrl={_get(messages, 'header.homeUrl')}
      {...restProps}
    />
  );
};

Header.propTypes = {
  country: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  activeTab: PropTypes.string,
  loginAvailable: PropTypes.bool,
  authenticationStatus: PropTypes.oneOf([
    AUTHENTICATED,
    UNAUTHENTICATED,
    AUTH_PENDING
  ]),
  userName: PropTypes.string,
  domainUrl: PropTypes.string,
  url: PropTypes.string,
  currentPage: PropTypes.string
};

export default Header;
