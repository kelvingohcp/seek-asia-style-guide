import React from 'react';
import PropTypes from 'prop-types';

import styles from './UpperFooter.less';
import PartnerSites from '../PartnerSites/PartnerSites';
import { Columns, Icon, ListItem, Section, Text, Hidden } from 'seek-asia-style-guide/react';

const UpperFooter = ({ messages, wordpressLink, cfsLink, externalLink, hasCompanyProfile }) => {
  const FooterLink = ({ messageKey, iconType }) => (
    <ListItem
      compact
      descriptionProps={{ semiStrong: true, whistling: true }}
      disableBackground
      icon={iconType && <Icon size="small" type={iconType} className={styles.content} />}
      noShadow
      value={messages[messageKey]}
    />
  );
  FooterLink.propTypes = {
    iconType: PropTypes.string,
    messageKey: PropTypes.string
  };

  return (
    <Columns>
      <div className={styles.columnGroup}>
        <Section className={styles.firstCategory}>
          <Text semiStrong className={styles.title}>
            {messages['FooterHK.titleAboutJobsDB']}
          </Text>
          <Hidden mobile={true}>{ wordpressLink(
            <FooterLink messageKey={'FooterHK.aboutJobsDB'} />,
            messages['FooterHK.aboutJobsDBLink']
          )}</Hidden>
          <Hidden mobile={true}>{cfsLink(
            <FooterLink messageKey={'FooterHK.faq'} />,
            messages['FooterHK.faqLink']
          )}</Hidden>
          {cfsLink(
            <FooterLink messageKey={'FooterHK.career'} />,
            messages['FooterHK.careerLink']
          )}
          <Hidden desktop={false} tablet={false} mobile={true}>{wordpressLink(
            <FooterLink messageKey={'FooterHK.contactUs'} />,
            messages['FooterHK.contactUsLink']
          )}</Hidden>
          <Hidden desktop={true} tablet={true} mobile={false}>{externalLink(
            <FooterLink messageKey={'FooterHK.contactUs'} />,
            messages['FooterHK.contactUsLinkMsite']
          )}</Hidden>
          <PartnerSites messages={messages} externalLink={externalLink} />
        </Section>
        <Section className={styles.category}>
          <Text semiStrong className={styles.title}>
            {messages['FooterHK.titleJobSeeker']}
          </Text>
          {cfsLink(
            <FooterLink messageKey={'FooterHK.browseJobs'} />,
            messages['FooterHK.browseJobsLink']
          )}
          {<Hidden mobile={true}>{cfsLink(
            <FooterLink messageKey={'FooterHK.resumes'} />,
            messages['FooterHK.resumesLink']
          )}</Hidden>}
          <Hidden mobile={true}>{cfsLink(
            <FooterLink messageKey={'FooterHK.jobAlerts'} />,
            messages['FooterHK.jobAlertsLink']
          )}</Hidden>
          {cfsLink(
            <FooterLink messageKey={'FooterHK.myJobsDBTitle'} />,
            messages['FooterHK.myJobsDBUrl']
          )}
          {cfsLink(
            <FooterLink messageKey={'FooterHK.careerInsightsTitle'} />,
            messages['FooterHK.careerInsightsUrl']
          )}
        </Section>
      </div>
      <div className={styles.columnGroup}>
        <Section className={styles.category}>
          <Text semiStrong className={styles.title}>
            {messages['FooterHK.titleEmployer']}
          </Text>
          {wordpressLink(
            <FooterLink messageKey={'FooterHK.postJob'} />,
            messages['FooterHK.postJobLink']
          )}
          {wordpressLink(
            <FooterLink messageKey={'FooterHK.searchCandidates'} />,
            messages['FooterHK.searchCandidatesLink']
          )}
          {wordpressLink(
            <FooterLink messageKey={'FooterHK.advertise'} />,
            messages['FooterHK.advertiseLink']
          )}
          {hasCompanyProfile && cfsLink(
            <FooterLink messageKey={'FooterHK.bestCompanies'} />,
            messages['FooterHK.bestCompaniesLink']
          )}
        </Section>
        <Section className={styles.category}>
          <Text semiStrong className={styles.title}>
            {messages['FooterHK.titleConnect']}
          </Text>
          {externalLink(
            <FooterLink messageKey={'FooterHK.facebook'} iconType={'facebook'} />,
            messages['FooterHK.facebookLink']
          )}
          {externalLink(
            <FooterLink messageKey={'FooterHK.twitter'} iconType={'twitter'} />,
            messages['FooterHK.twitterLink']
          )}
          {externalLink(
            <FooterLink messageKey={'FooterHK.appStore'} iconType={'apple'} />,
            messages['FooterHK.appStoreLink']
          )}
          {externalLink(
            <FooterLink messageKey={'FooterHK.googlePlay'} iconType={'android'} />,
            messages['FooterHK.googlePlayLink']
          )}
        </Section>
      </div>
    </Columns>
  );
};

UpperFooter.propTypes = {
  messages: PropTypes.object.isRequired,
  externalLink: PropTypes.func.isRequired,
  cfsLink: PropTypes.func.isRequired,
  wordpressLink: PropTypes.func.isRequired,
  hasCompanyProfile: PropTypes.bool
};

UpperFooter.defaultProps = {
  hasCompanyProfile: false
};

export default UpperFooter;
