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
            <ListItem value={messages['FooterHK.aboutJobsDB']} className={styles.content} descriptionProps={{ semiStrong: true, whistling: true }} />,
            messages['FooterHK.aboutJobsDBLink']
          )}
          {cfsLink(
            <ListItem value={messages['FooterHK.faq']} className={styles.content} descriptionProps={{ semiStrong: true, whistling: true }} />,
            messages['FooterHK.faqLink']
          )}
          {cfsLink(
            <ListItem value={messages['FooterHK.career']} className={styles.content} descriptionProps={{ semiStrong: true, whistling: true }} />,
            messages['FooterHK.careerLink']
          )}
          {wordpressLink(
            <ListItem value={messages['FooterHK.contactUs']} className={styles.content} descriptionProps={{ semiStrong: true, whistling: true }} />,
            messages['FooterHK.contactUsLink']
          )}
          <PartnerSites messages={messages} externalLink={externalLink} />
        </Section>
        <Section className={styles.category}>
          <Text waving semiStrong className={styles.title}>
            {messages['FooterHK.titleJobSeeker']}
          </Text>
          {cfsLink(
            <ListItem value={messages['FooterHK.browseJobs']} className={styles.content} descriptionProps={{ semiStrong: true, whistling: true }} />,
            messages['FooterHK.browseJobsLink']
          )}
          {cfsLink(
            <ListItem value={messages['FooterHK.resumes']} className={styles.content} descriptionProps={{ semiStrong: true, whistling: true }} />,
            messages['FooterHK.resumesLink']
          )}
          {cfsLink(
            <ListItem value={messages['FooterHK.jobAlerts']} className={styles.content} descriptionProps={{ semiStrong: true, whistling: true }} />,
            messages['FooterHK.jobAlertsLink']
          )}
          {cfsLink(
            <ListItem value={messages['FooterHK.myJobsDBTitle']} className={styles.content} descriptionProps={{ semiStrong: true, whistling: true }} />,
            messages['FooterHK.myJobsDBUrl']
          )}
          {cfsLink(
            <ListItem value={messages['FooterHK.careerInsightsTitle']} className={styles.content} descriptionProps={{ semiStrong: true, whistling: true }} />,
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
            <ListItem value={messages['FooterHK.postJob']} className={styles.content} descriptionProps={{ semiStrong: true, whistling: true }} />,
            messages['FooterHK.postJobLink']
          )}
          {wordpressLink(
            <ListItem value={messages['FooterHK.searchCandidates']} className={styles.content} descriptionProps={{ semiStrong: true, whistling: true }} />,
            messages['FooterHK.searchCandidatesLink']
          )}
          {wordpressLink(
            <ListItem value={messages['FooterHK.advertise']} className={styles.content} descriptionProps={{ semiStrong: true, whistling: true }} />,
            messages['FooterHK.advertiseLink']
          )}
          {cfsLink(
            <ListItem value={messages['FooterHK.bestCompanies']} className={styles.content} descriptionProps={{ semiStrong: true, whistling: true }} />,
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
              icon={<FacebookIcon className={styles.content} square />}
              className={styles.content}
              descriptionProps={{ semiStrong: true, whistling: true }}
            />,
            messages['FooterHK.facebookLink']
          )}
          {externalLink(
            <ListItem
              value={messages['FooterHK.twitter']}
              icon={<TwitterIcon className={styles.content} generic />}
              className={styles.content}
              descriptionProps={{ semiStrong: true, whistling: true }}
            />,
            messages['FooterHK.twitterLink']
          )}
          {externalLink(
            <ListItem
              value={messages['FooterHK.appStore']}
              icon={<AppleIcon className={styles.content} />}
              className={styles.content}
              descriptionProps={{ semiStrong: true, whistling: true }}
            />,
            messages['FooterHK.appStoreLink']
          )}
          {externalLink(
            <ListItem
              value={messages['FooterHK.googlePlay']}
              icon={<AndroidIcon className={styles.content} />}
              className={styles.content}
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
