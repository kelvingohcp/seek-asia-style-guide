import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.less';
import { Header as GlobalHeader } from 'seek-asia-style-guide/react';
import Logo from '../Logo/Logo';
import { PortalIcon, CompanyIcon, EducationIcon, ProfileIcon, JobInvitationIcon, JobFunctionIcon } from 'seek-asia-style-guide/react';
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

  const userAccMenuItems = [
    // Remove for short-term solution since FB user are having issue with this two link, Bricks team are fixing
    // { ... _get(headerMessage, 'account'), ItemIcon: ProfileIcon, EnableIcon: true },
    // { ... _get(headerMessage, 'invitation'), ItemIcon: JobInvitationIcon, EnableIcon: true },
    { ... _get(headerMessage, 'logout'), ItemIcon: JobFunctionIcon, EnableIcon: false }
  ];

  return {
    links,
    headerMessage,
    locales,
    menuMessage: _get(messages, 'menu'),
    userAccMenuItems
  };
};

const Header = ({ country, language, activeTab, loginAvailable = false, ...restProps }) => {
  const brandStyles = {
    activeActionTrayIcon: styles.activeActionTrayIcon,
    menuIcon: styles.menuIcon,
    primaryNavLink: styles.primaryNavLink
  };

  return (
    <GlobalHeader
      LogoComponent={Logo}
      logoProps={{ country }}
      activeTab={activeTab}
      loginAvailable={loginAvailable}
      {...getJobStreetProps({ country, language })}
      brandStyles={brandStyles}
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
