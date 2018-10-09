import React from 'react';
import styles from './footer.less';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import FooterLinks from './components/FooterLinks/FooterLinks';
import FooterHK from './FooterHK/FooterHK';
import localization from './localization';

const Footer = ({ language, country, isExpandedVersion, showHeaderActionTrayOffset = true, ...restProps }) => {
  const year = new Date().getFullYear();
  const messages = localization[`${language}-${country}`];

  if (country === 'hk' && isExpandedVersion) {
    return (<FooterHK language={language} country={country} {...restProps} />);
  }
  return (
    <footer className={classnames(styles.container, { [styles.headerActionTrayOffset]: showHeaderActionTrayOffset })}>
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
  country: PropTypes.string.isRequired,
  showHeaderActionTrayOffset: PropTypes.bool,
  isExpandedVersion: PropTypes.bool
};

export default Footer;
