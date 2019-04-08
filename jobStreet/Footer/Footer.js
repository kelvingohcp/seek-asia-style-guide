import React from 'react';
import styles from './footer.less';
import PropTypes from 'prop-types';
import FooterLinks from './components/FooterLinks/FooterLinks';
import { getLocalization } from '../localization';
import _get from 'lodash/get';

const Footer = ({ language, country }) => {
  const year = new Date().getFullYear();
  const messages = getLocalization({ country, language });
  const footerMessages = _get(messages, 'footer');

  if (footerMessages) {
    return (
      <footer className={styles.container}>
        <FooterLinks footerMessages={footerMessages} />
        <p className={styles.copyright}>
          {_get(footerMessages, 'copyright').replace('{year}', year)}
        </p>
      </footer>
    );
  }

  return null;
};

Footer.propTypes = {
  language: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
};

export default Footer;
