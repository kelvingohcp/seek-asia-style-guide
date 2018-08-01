import React from 'react';
import styles from './footer.less';
import PropTypes from 'prop-types';

import FooterLinks from './components/FooterLinks/FooterLinks';
import FooterHK from './FooterHK/FooterHK';
import localization from './localization';

const Footer = ({ language, country, ...restProps }) => {
  const year = new Date().getFullYear();
  const messages = localization[`${language}-${country}`];

  if (country === 'hk') {
    return (<FooterHK language={language} country={country} {...restProps} />);
  }
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.pullRight}>
          <FooterLinks messages={messages} />
        </div>
        <div className={styles.pullLeft}>
          <p className={styles.copyright}>
            {messages['footer.copyright'].replace('{year}', year)}
            <span className={styles.fullversion}>
              {messages['footer.rightReserved']}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  language: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
};

export default Footer;
