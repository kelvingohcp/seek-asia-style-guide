import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import styles from './FooterLinks.less';

const ListLinks = ({ title, url }) => {
  if (title && url) {
    return (
      <li className={styles.item}>
        <a className={styles.link} href={url}>
          {title}
        </a>
      </li>
    );
  }
  return null;
};

const FooterLinks = ({ footerMessages }) => {
  return (
    <ul className={styles.list}>
      <ListLinks {..._get(footerMessages, 'link')} />
      <ListLinks {..._get(footerMessages, 'siteMap')} />
      <ListLinks {..._get(footerMessages, 'about')} />
      <ListLinks {..._get(footerMessages, 'profile')} />
      <ListLinks {..._get(footerMessages, 'terms')} />
      <ListLinks {..._get(footerMessages, 'privacy')} />
      <ListLinks {..._get(footerMessages, 'safe')} />
      <ListLinks {..._get(footerMessages, 'help')} />
      <ListLinks {..._get(footerMessages, 'feedback')} />
    </ul>
  );
};

FooterLinks.propTypes = {
  footerMessages: PropTypes.object.isRequired
};

ListLinks.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default FooterLinks;
