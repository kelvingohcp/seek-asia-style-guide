import React from 'react';
import PropTypes from 'prop-types';

import styles from './PartnerSites.less';
import { ListItem, DropdownList } from 'seek-asia-style-guide/react';

const PartnerSites = ({ messages, externalLink }) => {
  return (
    <DropdownList
      value={messages['FooterHK.partners']}
      compact
      noShadow
      className={styles.dropdownListContent}
      semiStrong
      whistling>

      {externalLink(
        <ListItem value='BabaJob (India)' disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.BabaJobLink']
      )}
      {externalLink(
        <ListItem value='Bdjobs (Bandladesh)' disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.BdjobsLink']
      )}
      {externalLink(
        <ListItem value='Brighter Monday (East Africa)' disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.BrighterMondayLink']
      )}
      {externalLink(
        <ListItem value='Catho (Brazil)' disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.CathoLink']
      )}
      {externalLink(
        <ListItem value='Jobberman (West Africa)' disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.JobbermanLink']
      )}
      {externalLink(
        <ListItem value='JobStreet (S.E. Asia)' disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.JobStreetLink']
      )}
      {externalLink(
        <ListItem value='Jora (Hong Kong)' disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.JoraLink']
      )}
      {externalLink(
        <ListItem value='Manager (Brazil)' disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.ManagerLink']
      )}
      {externalLink(
        <ListItem value='OCC Mundial (Mexico)' disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.OCCLink']
      )}
      {externalLink(
        <ListItem value='Seaman Jobsite (Philippines)' disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.SeamanJobsiteLink']
      )}
      {externalLink(
        <ListItem value='SEEK (Australia)' disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.SEEKLink']
      )}
      {externalLink(
        <ListItem value='Work Abroad (Philippines)' disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.WorkAbroadLink']
      )}
      {externalLink(
        <ListItem value='Workana' disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
        messages['FooterHK.WorkanaLink']
      )}
      {externalLink(
        <ListItem value='Zhaopin (China)' disableBackground compact descriptionProps={{ semiStrong: true, whistling: true }} />,
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
