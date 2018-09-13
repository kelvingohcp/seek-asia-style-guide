import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageSliderSlot.less';
import defaultLink from '../../../JobCard/components/Link/Link';

export default function ImageSliderSlot({ orderID,
  urlPath,
  imagePath,
  companyTitle,
  indexID,
  onFeatureCompanyClick,
  LinkComponent = defaultLink }) {
  const orderStyle = function(x) {
    return {
      order: x
    };
  };

  const handleClick = e => {
    // Prevent default event in Edge
    e.preventDefault();
    onFeatureCompanyClick();
  };

  const featureCompaniesLink = (<span className={styles.slot} style={{ backgroundImage: `url('${imagePath}')` }} />);

  return (
    <div className={styles.slotDiv} style={orderStyle(orderID)} key={indexID} title={companyTitle} onClick={handleClick}>
      <LinkComponent link={urlPath} children={featureCompaniesLink} />
    </div>
  );
}

ImageSliderSlot.propTypes = {
  orderID: PropTypes.number.isRequired,
  urlPath: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  companyTitle: PropTypes.string.isRequired,
  indexID: PropTypes.number.isRequired,
  onFeatureCompanyClick: PropTypes.func,
  LinkComponent: PropTypes.func
};

