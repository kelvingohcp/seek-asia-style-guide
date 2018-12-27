import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import styles from './FooterLinks.less';
import { Text } from 'seek-asia-style-guide/react';

const FooterLinks = ({ messages, cfsLink, wordpressLink, displayInDesktop }) => {
  return (
    <div className={classnames(styles.list, displayInDesktop && styles.displayInDesktop)}>
      <div className={styles.item}>
        {wordpressLink(
          <Text className={styles.copyright} whispering secondary semiStrong>
            {messages['FooterHK.privacyLinkText']}
          </Text>,
          messages['FooterHK.privacyLink']
        )}
      </div>
      <div className={styles.item}>
        {wordpressLink(
          <Text className={styles.copyright} whispering secondary semiStrong>
            {messages['FooterHK.termsLinkText']}
          </Text>,
          messages['FooterHK.termsLink']
        )}
      </div>
      <div className={styles.item}>
        {cfsLink(
          <Text className={styles.copyright} whispering secondary semiStrong>
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
  wordpressLink: PropTypes.func.isRequired,
  displayInDesktop: PropTypes.bool
};

export default FooterLinks;
