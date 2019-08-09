import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './CompanyBanner.less';

const CompanyBanner = ({ bannerUrl, enableBrandedAd, isMobile }) => {
  if (!(enableBrandedAd && bannerUrl)) {
    return null;
  }

  const bannerClassNames = classnames(styles.companyBanner, isMobile ? styles.companyBannerOnMobile : styles.companyBannerOnDesktop);

  return <img className={bannerClassNames} src={bannerUrl} />;
};

CompanyBanner.propTypes = {
  bannerUrl: PropTypes.string,
  isMobile: PropTypes.bool,
  enableBrandedAd: PropTypes.bool
};

export default CompanyBanner;
