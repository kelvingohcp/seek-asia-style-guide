import React from 'react';
import PropTypes from 'prop-types';

import styles from './UpperFooter.less';
import PartnerSites from '../PartnerSites/PartnerSites';
import { Columns, ListItem, Section, Text, FacebookIcon, TwitterIcon, AppleIcon, AndroidIcon } from 'seek-asia-style-guide/react';

const UpperFooter = ({ messages, wordpressLink, cfsLink, externalLink }) => {
  return (
    <Columns>
      <div className={styles.columnGroup}>
        <Section className={styles.firstCategory}>
          <Text waving semiStrong className={styles.title}>
            {messages['FooterHK.titleAboutJobsDB']}
          </Text>
          {wordpressLink(
            <ListItem value={messages['FooterHK.aboutJobsDB']} disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
            messages['FooterHK.aboutJobsDBLink']
          )}
          {cfsLink(
            <ListItem value={messages['FooterHK.faq']} disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
            messages['FooterHK.faqLink']
          )}
          {cfsLink(
            <ListItem value={messages['FooterHK.career']} disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
            messages['FooterHK.careerLink']
          )}
          {wordpressLink(
            <ListItem value={messages['FooterHK.contactUs']} disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
            messages['FooterHK.contactUsLink']
          )}
          <PartnerSites messages={messages} externalLink={externalLink} />
        </Section>
        <Section className={styles.category}>
          <Text waving semiStrong className={styles.title}>
            {messages['FooterHK.titleJobSeeker']}
          </Text>
          {cfsLink(
            <ListItem value={messages['FooterHK.browseJobs']} disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
            messages['FooterHK.browseJobsLink']
          )}
          {cfsLink(
            <ListItem value={messages['FooterHK.resumes']} disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
            messages['FooterHK.resumesLink']
          )}
          {cfsLink(
            <ListItem value={messages['FooterHK.jobAlerts']} disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
            messages['FooterHK.jobAlertsLink']
          )}
          {cfsLink(
            <ListItem value={messages['FooterHK.myJobsDBTitle']} disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
            messages['FooterHK.myJobsDBUrl']
          )}
          {cfsLink(
            <ListItem value={messages['FooterHK.careerInsightsTitle']} disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
            messages['FooterHK.careerInsightsUrl']
          )}
        </Section>
      </div>
      <div className={styles.columnGroup}>
        <Section className={styles.category}>
          <Text waving semiStrong className={styles.title}>
            {messages['FooterHK.titleEmployer']}
          </Text>
          {wordpressLink(
            <ListItem value={messages['FooterHK.postJob']} disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
            messages['FooterHK.postJobLink']
          )}
          {wordpressLink(
            <ListItem value={messages['FooterHK.searchCandidates']} disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
            messages['FooterHK.searchCandidatesLink']
          )}
          {wordpressLink(
            <ListItem value={messages['FooterHK.advertise']} disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
            messages['FooterHK.advertiseLink']
          )}
          {cfsLink(
            <ListItem value={messages['FooterHK.bestCompanies']} disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
            messages['FooterHK.bestCompaniesLink']
          )}
        </Section>
        <Section className={styles.category}>
          <Text waving semiStrong className={styles.title}>
            {messages['FooterHK.titleConnect']}
          </Text>
          {externalLink(
            <ListItem
              value={messages['FooterHK.facebook']}
              disableBackground
              icon={<FacebookIcon className={styles.content} square />}
              compact
              descriptionProps={{ semiStrong: true, whistling: true }}
            />,
            messages['FooterHK.facebookLink']
          )}
          {externalLink(
            <ListItem
              value={messages['FooterHK.twitter']}
              disableBackground
              icon={<TwitterIcon className={styles.content} generic />}
              compact
              descriptionProps={{ semiStrong: true, whistling: true }}
            />,
            messages['FooterHK.twitterLink']
          )}
          {externalLink(
            <ListItem
              value={messages['FooterHK.appStore']}
              disableBackground
              icon={<AppleIcon className={styles.content} />}
              compact
              descriptionProps={{ semiStrong: true, whistling: true }}
            />,
            messages['FooterHK.appStoreLink']
          )}
          {externalLink(
            <ListItem
              value={messages['FooterHK.googlePlay']}
              disableBackground
              icon={<AndroidIcon className={styles.content} />}
              compact
              descriptionProps={{ semiStrong: true, whistling: true }}
            />,
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
  wordpressLink: PropTypes.func.isRequired
};

export default UpperFooter;
