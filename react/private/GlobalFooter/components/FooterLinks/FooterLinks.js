import React from 'react';
import PropTypes from 'prop-types';

import styles from './FooterLinks.less';
import { Text } from 'seek-asia-style-guide/react';
import _get from 'lodash/get';

const FooterLinks = ({ footerMessages, linkRenderer }) => {
  const LinkItem = ({ title, url }) => {
    return linkRenderer({
      children: <Text whispering secondary semiStrong className={styles.item}>
        {title}
      </Text>,
      href: url
    });
  };

  LinkItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

  return (
    <ul className={styles.footerMeta}>
      <li className={styles.footerMetaItem}><LinkItem {..._get(footerMessages, 'privacy')} className={styles.footerMetaItem} /></li>
      <li className={styles.footerMetaItem}><LinkItem {..._get(footerMessages, 'terms')} className={styles.footerMetaItem} /></li>
      <li className={styles.footerMetaItem}><LinkItem {..._get(footerMessages, 'siteMap')} className={styles.footerMetaItem} /></li>
    </ul>
  );
};

FooterLinks.propTypes = {
  footerMessages: PropTypes.object.isRequired,
  linkRenderer: PropTypes.func.isRequired
};

export default FooterLinks;
