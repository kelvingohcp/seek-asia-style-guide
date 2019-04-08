import React from 'react';
import { JobFunctionIcon, ProfileIcon, JobInvitationIcon, Icon } from 'seek-asia-style-guide/react';
import { AUTHENTICATED } from '../react/private/authStatusTypes';
import _get from 'lodash/get';

export const getJobsDBHeaderProps = ({ country, domainUrl, authenticationStatus, headerMessage, styles }) => {
  if (headerMessage) {
    const iconRenderer = icon => {
      return <Icon type={icon} lineHeight='conversational' size='small' className={styles.menuIcon} />;
    };

    let icon = iconRenderer('careerInsight');

    if (country === 'th') {
      icon = iconRenderer('education');
    } else if (country === 'id') {
      icon = iconRenderer('calendar');
    }

    const downloadItems = [
      {
        ..._get(headerMessage, 'playStore'),
        ItemIcon: iconRenderer('android')
      },
      {
        ..._get(headerMessage, 'appStore'),
        ItemIcon: iconRenderer('apple')
      }
    ];

    const baseUrl = `https://${country}.${domainUrl}`;

    const profileItems =
    [{
      ... _get(headerMessage, 'resumesAndDocuments'),
      ItemIcon: iconRenderer('resume')
    },
    {
      ... _get(headerMessage, 'applicationHistoryList'),
      ItemIcon: iconRenderer('applicationHistory')
    },
    {
      ... _get(headerMessage, 'jobAlertsList'),
      ItemIcon: iconRenderer('jobAlert')
    },
    {
      ... _get(headerMessage, 'saveJobs'),
      ItemIcon: iconRenderer('bookmark')
    }];

    const links = [
      authenticationStatus === AUTHENTICATED ?
        ({ ... _get(headerMessage, 'jobsDBTitle'), ItemIcon: iconRenderer('myJobsDB'), children: profileItems, automationId: 'myjobsDB' }) :
        ({ ... _get(headerMessage, 'jobsDBTitle'), ItemIcon: iconRenderer('myJobsDB'), automationId: 'myjobsDB' }),
      { ... _get(headerMessage, 'resources'), ItemIcon: iconRenderer('resources'), automationId: 'resources' },
      { ... _get(headerMessage, 'careerInsights'), ItemIcon: icon, automationId: 'career-insights' },
      { title: _get(headerMessage, 'downloadApp'), children: downloadItems, ItemIcon: iconRenderer('appDownload'), automationId: 'download-app', hideInDesktop: true }
    ];

    const userAccMenuItems = [
      { ... _get(headerMessage, 'profile'), ItemIcon: ProfileIcon, EnableIcon: true },
      { ... _get(headerMessage, 'invitation'), ItemIcon: JobInvitationIcon, EnableIcon: true },
      { ... _get(headerMessage, 'logout'), ItemIcon: JobFunctionIcon, EnableIcon: false }
    ];

    return {
      links,
      headerMessage,
      userAccMenuItems,
      baseUrl,
      profileItems
    };
  }
  return {};
};

export const getLocalList = ({ messages, currentPage, domainUrl, country, language }) => {
  const locales = _get(messages, 'menu.countryList');
  if (locales) {
    locales.map(locale => {
      locale.url = locale.language === 'id' || locale.language === 'th' ? `https://${locale.country}.${domainUrl}/${locale.country}/${locale.language}` : `https://${locale.country}.${domainUrl}/${locale.country}`;
      locale.url = (currentPage !== null && typeof(currentPage) !== 'undefined') && (locale.country === 'id' || locale.country === 'th') ? `${locale.url}/${currentPage}` : locale.url;
    });

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
  }
  return [];
};
