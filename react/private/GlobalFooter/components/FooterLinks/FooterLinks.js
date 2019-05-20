import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import styles from './FooterLinks.less';
import { Text } from 'seek-asia-style-guide/react';
import _get from 'lodash/get';

const FooterLinks = ({ footerMessages, linkRenderer, displayInDesktop }) => {
  const LinkItem = ({ title, url }) => {
    return (
      <div className={styles.item}>
        {
          linkRenderer({
            children: <Text whispering secondary semiStrong>
              {title}
            </Text>,
            href: url
          })
        }
      </div>
    );
  };

  LinkItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

  return (
    <div className={classnames(styles.list, displayInDesktop && styles.displayInDesktop)}>
      <LinkItem {..._get(footerMessages, 'privacy')} />
      <LinkItem {..._get(footerMessages, 'terms')} />
      <LinkItem {..._get(footerMessages, 'siteMap')} />
    </div>
  );
};

FooterLinks.propTypes = {
  footerMessages: PropTypes.object.isRequired,
  linkRenderer: PropTypes.func.isRequired,
  displayInDesktop: PropTypes.bool
};

export default FooterLinks;
