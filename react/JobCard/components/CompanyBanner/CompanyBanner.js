import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './CompanyBanner.less';

const CompanyBanner = ({ bannerUrl, enableBrandedAd, isMobile, isIntersecting = true }) => {
  if (!(enableBrandedAd && bannerUrl)) {
    return null;
  }

  const bannerClassNames = classnames(styles.companyBanner, isMobile ? styles.companyBannerOnMobile : styles.companyBannerOnDesktop);

  return isIntersecting ?
    <img
      className={bannerClassNames}
      src={bannerUrl}
    /> : <div className={classnames(styles.placeholder, bannerClassNames)} />;
};

CompanyBanner.propTypes = {
  isIntersecting: PropTypes.bool,
  bannerUrl: PropTypes.string,
  isMobile: PropTypes.bool,
  enableBrandedAd: PropTypes.bool
};

export default CompanyBanner;
