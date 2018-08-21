import React from 'react';
import PropTypes from 'prop-types';

import styles from './PartnerSites.less';
import { ListItem, DropdownList } from 'seek-asia-style-guide/react';

const PartnerSites = ({ messages, externalLink }) => {
  return (
    <DropdownList
      value={messages['FooterHK.partners']}
      noShadow
      className={styles.content}
      semiStrong
      whistling
      chevronAlignment='center'>

      {externalLink(
        <ListItem value='BabaJob (India)' disableBackground compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.BabaJobLink']
      )}
      {externalLink(
        <ListItem value='Bdjobs (Bandladesh)' disableBackground compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.BdjobsLink']
      )}
      {externalLink(
        <ListItem value='Brighter Monday (East Africa)' disableBackground compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.BrighterMondayLink']
      )}
      {externalLink(
        <ListItem value='Catho (Brazil)' disableBackground compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.CathoLink']
      )}
      {externalLink(
        <ListItem value='Jobberman (West Africa)' disableBackground compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.JobbermanLink']
      )}
      {externalLink(
        <ListItem value='JobStreet (S.E. Asia)' disableBackground compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.JobStreetLink']
      )}
      {externalLink(
        <ListItem value='Jora (Hong Kong)' disableBackground compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.JoraLink']
      )}
      {externalLink(
        <ListItem value='Manager (Brazil)' disableBackground compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.ManagerLink']
      )}
      {externalLink(
        <ListItem value='OCC Mundial (Mexico)' disableBackground compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.OCCLink']
      )}
      {externalLink(
        <ListItem value='Seaman Jobsite (Philippines)' disableBackground compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.SeamanJobsiteLink']
      )}
      {externalLink(
        <ListItem value='SEEK (Australia)' disableBackground compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.SEEKLink']
      )}
      {externalLink(
        <ListItem value='Work Abroad (Philippines)' disableBackground compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.WorkAbroadLink']
      )}
      {externalLink(
        <ListItem value='Workana' disableBackground compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.WorkanaLink']
      )}
      {externalLink(
        <ListItem value='Zhaopin (China)' disableBackground compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.ZhaopinLink']
      )}
    </DropdownList>
  );
};

PartnerSites.propTypes = {
  messages: PropTypes.object.isRequired,
  externalLink: PropTypes.func.isRequired
};

export default PartnerSites;
