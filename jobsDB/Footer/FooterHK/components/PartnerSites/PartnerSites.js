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
      whistling>

      {externalLink(
        <ListItem value='BabaJob (India)' noShadow compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.BabaJobLink']
      )}
      {externalLink(
        <ListItem value='Bdjobs (Bandladesh)' noShadow compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.BdjobsLink']
      )}
      {externalLink(
        <ListItem value='Brighter Monday (East Africa)' noShadow compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.BrighterMondayLink']
      )}
      {externalLink(
        <ListItem value='Catho (Brazil)' noShadow compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.CathoLink']
      )}
      {externalLink(
        <ListItem value='Jobberman (West Africa)' noShadow compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.JobbermanLink']
      )}
      {externalLink(
        <ListItem value='JobStreet (S.E. Asia)' noShadow compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.JobStreetLink']
      )}
      {externalLink(
        <ListItem value='Jora (Hong Kong)' noShadow compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.JoraLink']
      )}
      {externalLink(
        <ListItem value='Manager (Brazil)' noShadow compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.ManagerLink']
      )}
      {externalLink(
        <ListItem value='OCC Mundial (Mexico)' noShadow compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.OCCLink']
      )}
      {externalLink(
        <ListItem value='Seaman Jobsite (Philippines)' noShadow compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.SeamanJobsiteLink']
      )}
      {externalLink(
        <ListItem value='SEEK (Australia)' noShadow compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.SEEKLink']
      )}
      {externalLink(
        <ListItem value='Work Abroad (Philippines)' noShadow compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.WorkAbroadLink']
      )}
      {externalLink(
        <ListItem value='Workana' noShadow compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.WorkanaLink']
      )}
      {externalLink(
        <ListItem value='Zhaopin (China)' noShadow compact className={styles.partners} descriptionProps={{ semiStrong: true, whistling: true }} />,
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
