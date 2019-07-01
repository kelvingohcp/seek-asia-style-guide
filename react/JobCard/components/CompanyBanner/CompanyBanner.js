import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './CompanyBanner.less';

const CompanyBanner = ({ bannerUrl, enableBrandedAd, isMobile }) => {
  return enableBrandedAd && bannerUrl ?
    <img
      className={classnames(styles.companyBanner, isMobile ? styles.companyBannerOnMobile : styles.companyBannerOnDesktop)}
      src={bannerUrl}
    /> : null;
};

CompanyBanner.propTypes = {
  bannerUrl: PropTypes.string,
  isMobile: PropTypes.bool,
  enableBrandedAd: PropTypes.bool
};

export default CompanyBanner;
