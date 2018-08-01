import React from 'react';
import PropTypes from 'prop-types';

import styles from './FooterLinks.less';
import { Text } from 'seek-asia-style-guide/react';

const FooterLinks = ({ messages, cfsLink, wordpressLink }) => {
  return (
    <div className={styles.list}>
      <div className={styles.item}>
        {wordpressLink(
          <Text className={styles.copyright} whistling secondary semiStrong>
            {messages['FooterHK.privacyLinkText']}
          </Text>,
          messages['FooterHK.privacyLink']
        )}
      </div>
      <div className={styles.item}>
        {wordpressLink(
          <Text className={styles.copyright} whistling secondary semiStrong>
            {messages['FooterHK.termsLinkText']}
          </Text>,
          messages['FooterHK.termsLink']
        )}
      </div>
      <div className={styles.item}>
        {cfsLink(
          <Text className={styles.copyright} whistling secondary semiStrong>
            {messages['FooterHK.siteMapLinkText']}
          </Text>,
          messages['FooterHK.siteMapLink']
        )}
      </div>
    </div>
  );
};

FooterLinks.propTypes = {
  messages: PropTypes.object.isRequired,
  cfsLink: PropTypes.func.isRequired,
  wordpressLink: PropTypes.func.isRequired
};

export default FooterLinks;
