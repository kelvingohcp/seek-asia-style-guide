import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageSliderSlot.less';

export default function ImageSliderSlot({ orderID,
  urlPath,
  imagePath,
  companyTitle,
  indexID }) {
  const orderStyle = function(x) {
    return {
      order: x
    };
  };

  return (
    <div className={styles.slotDiv} style={orderStyle(orderID)} key={indexID} title={companyTitle}>
      <a href={urlPath} className={styles.slot} style={{ backgroundImage: `url('${imagePath}')` }} />
    </div>
  );
}

ImageSliderSlot.propTypes = {
  orderID: PropTypes.number.isRequired,
  urlPath: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  companyTitle: PropTypes.string.isRequired,
  indexID: PropTypes.number.isRequired
};

