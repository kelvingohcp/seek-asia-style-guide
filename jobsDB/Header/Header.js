import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.less';
import { Header as GlobalHeader } from 'seek-asia-style-guide/react';
import Logo from '../Logo/Logo';
import { JobFunctionIcon, ProfileIcon, JobInvitationIcon, Icon } from 'seek-asia-style-guide/react';
import { getLocalization } from '../localization';
import { AUTHENTICATED, UNAUTHENTICATED, AUTH_PENDING } from '../../react/private/authStatusTypes';

const getJobsDBProps = ({ country, domainUrl, authenticationStatus, currentPage, messages }) => {
  const baseUrl = `https://${country}.${domainUrl}`;

  const iconRenderer = icon => {
    return <Icon type={icon} lineHeight='conventional' size='small' className={styles.menuIcon} />;
  };

  let icon = iconRenderer('careerInsight');

  if (country === 'th') {
    icon = iconRenderer('education');
  } else if (country === 'id') {
    icon = iconRenderer('calendar');
  }

  const profileItems =
  [{
    title: messages['header.myJobsDBResumesAndDocumentsTitle'],
    ItemIcon: iconRenderer('resume'),
    url: baseUrl + messages['header.myJobsDBResumesAndDocumentsUrl']
  },
  {
    title: messages['header.myJobsDBApplicationHistoryListTitle'],
    ItemIcon: iconRenderer('applicationHistory'),
    url: baseUrl + messages['header.myJobsDBApplicationHistoryListUrl']
  },
  {
    title: messages['header.myJobsDBJobAlertsListTitle'],
    ItemIcon: iconRenderer('jobAlert'),
    url: baseUrl + messages['header.myJobsDBJobAlertsListUrl']
  },
  {
    title: messages['header.myJobsDBSaveJobsTitle'],
    ItemIcon: iconRenderer('bookmark'),
    url: messages['header.myJobsDBSaveJobsUrl']
  }];

  const downloadItems = [
    {
      title: messages['header.playStore'],
      ItemIcon: iconRenderer('android'),
      url: messages['header.playStoreUrl']
    },
    {
      title: messages['header.appStore'],
      ItemIcon: iconRenderer('apple'),
      url: messages['header.appStoreUrl']
    }
  ];

  const links = [
    authenticationStatus === AUTHENTICATED ?
      ({ title: messages['header.myJobsDBTitle'], url: baseUrl + messages['header.myJobsDBUrlLoggedIn'], ItemIcon: iconRenderer('myJobsDB'), children: profileItems, automationId: 'myjobsDB' }) :
      ({ title: messages['header.myJobsDBTitle'], url: baseUrl + messages['header.myJobsDBUrl'], ItemIcon: iconRenderer('myJobsDB'), automationId: 'myjobsDB' }),
    { title: messages['header.resourcesTitle'], url: baseUrl + messages['header.resourcesUrl'], ItemIcon: iconRenderer('resources'), automationId: 'resources' },
    { title: messages['header.careerInsightsTitle'], url: baseUrl + messages['header.careerInsightsUrl'], ItemIcon: icon, automationId: 'career-insights' },
    { title: messages['header.downloadApp'], children: downloadItems, ItemIcon: iconRenderer('appDownload'), automationId: 'download-app', hideInDesktop: true }
  ];

  const userAccMenuItems = [
    { title: messages['header.profileTitle'], url: baseUrl + messages['header.profileUrl'], ItemIcon: ProfileIcon, EnableIcon: true },
    { title: messages['header.invitationTitle'], url: baseUrl + messages['header.invitationUrl'], ItemIcon: JobInvitationIcon, EnableIcon: true },
    { title: messages['header.logoutTitle'], url: baseUrl + messages['header.logoutUrl'], ItemIcon: JobFunctionIcon, EnableIcon: false }
  ];

  const locales = messages['header.countryList'];
  locales.map(locale => {
    locale.url = locale.language === 'id' || locale.language === 'th' ? `https://${locale.country}.${domainUrl}/${locale.country}/${locale.language}` : `https://${locale.country}.${domainUrl}/${locale.country}`;
    locale.url = (currentPage !== null && typeof(currentPage) !== 'undefined') && (locale.country === 'id' || locale.country === 'th') ? `${locale.url}/${currentPage}` : locale.url;
  });

  return {
    links,
    messages,
    userAccMenuItems,
    baseUrl,
    locales,
    profileItems
  };
};

const Header = ({ country = 'hk', language = 'en', activeTab, loginAvailable = false, selectCountry = true, authenticationStatus = UNAUTHENTICATED, userName, domainUrl, currentPage, ...restProps }) => {
  const messages = getLocalization({ country, language });
  return (

    <GlobalHeader
      LogoComponent={Logo}
      activeTab={activeTab}
      loginAvailable={loginAvailable}
      {...getJobsDBProps({ country, domainUrl, authenticationStatus, currentPage, messages })}
      brandStyles={styles}
      country={country}
      language={language}
      employerSite={(authenticationStatus === UNAUTHENTICATED) || loginAvailable}
      selectCountry={selectCountry}
      userName={userName}
      authenticationStatus={authenticationStatus}
      homeUrl={messages['header.homeUrl']}
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
