import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.less';
import { Header as GlobalHeader } from 'seek-asia-style-guide/react';
import Logo from '../Logo/Logo';
import { PortalIcon, LightbulbIcon, ResourcesIcon, JobFunctionIcon, ProfileIcon, JobInvitationIcon, EducationIcon, EventIcon } from 'seek-asia-style-guide/react';
import { getLocalization } from '../localization';
import { AUTHENTICATED, UNAUTHENTICATED, AUTH_PENDING } from '../../react/private/authStatusTypes';

const getJobsDBProps = ({ country, language, domainUrl, authenticationStatus, currentPage }) => {
  const messages = getLocalization({ country, language });
  const baseUrl = `https://${country}.${domainUrl}`;

  let icon = LightbulbIcon;

  if (country === 'th') {
    icon = EducationIcon;
  } else if (country === 'id') {
    icon = EventIcon;
  }

  const links = [
    authenticationStatus === AUTHENTICATED ?
      ({ title: messages['header.myJobsDBTitle'], url: baseUrl + messages['header.myJobsDBUrlLoggedIn'], ItemIcon: PortalIcon }) :
      ({ title: messages['header.myJobsDBTitle'], url: baseUrl + messages['header.myJobsDBUrl'], ItemIcon: PortalIcon }),
    { title: messages['header.resourcesTitle'], url: baseUrl + messages['header.resourcesUrl'], ItemIcon: ResourcesIcon },
    { title: messages['header.careerInsightsTitle'], url: baseUrl + messages['header.careerInsightsUrl'], ItemIcon: icon }
  ];

  const userAccMenuItems = [
    { title: messages['header.profileTitle'], url: baseUrl + messages['header.profileUrl'], ItemIcon: ProfileIcon, EnableIcon: true },
    { title: messages['header.invitationTitle'], url: baseUrl + messages['header.invitationUrl'], ItemIcon: JobInvitationIcon, EnableIcon: true },
    { title: messages['header.logoutTitle'], url: messages['header.logoutUrl'], ItemIcon: JobFunctionIcon, EnableIcon: false }
  ];

  const locales = messages['header.countryList'];
  locales.map(locale => {
    locale.url = locale.language === 'id' || locale.language === 'th' ? `https://${locale.country}.${domainUrl}/${locale.country}/${locale.language}` : `https://${locale.country}.${domainUrl}/${locale.country}`;
    locale.url = (currentPage !== null && typeof(currentPage) !== 'undefined') && (locale.country === 'id' || locale.country === 'th') ? `${locale.url }/${currentPage}` : locale.url;
  });

  return {
    links,
    messages,
    userAccMenuItems,
    baseUrl,
    locales
  };
};

const Header = ({ country = 'hk', language = 'en', activeTab, loginAvailable = false, selectCountry = true, authenticationStatus = UNAUTHENTICATED, userName, domainUrl, currentPage, ...restProps }) => {
  return (

    <GlobalHeader
      LogoComponent={Logo}
      activeTab={activeTab}
      loginAvailable={loginAvailable}
      {...getJobsDBProps({ country, language, domainUrl, authenticationStatus, currentPage })}
      brandStyles={styles}
      country={country}
      language={language}
      employerSite={(authenticationStatus === UNAUTHENTICATED) || loginAvailable}
      selectCountry={selectCountry}
      userName={userName}
      authenticationStatus={authenticationStatus}
      {...restProps}
    />
  );
};

Header.propTypes = {
  country: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  activeTab: PropTypes.string,
  loginAvailable: PropTypes.bool,
  selectCountry: PropTypes.bool,
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
