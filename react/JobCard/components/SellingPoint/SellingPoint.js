import React from 'react';
import PropTypes from 'prop-types';
import styles from './SellingPoint.less';
import Text from '../../../Text/Text';

const SellingPoint = ({ sellingPoints, showSellingPoint }) => {
  if (!showSellingPoint || !sellingPoints) {
    return null;
  }

  return (
    <ul className={styles.sellingPoints}>
      {sellingPoints.map((sellingPoint, i) => (
        <li key={i} className={styles.sellingPoint}>
          <Text
            whispering
            baseline={false}
            className={styles.text}>
            {sellingPoint}
          </Text>
        </li>
      ))}
    </ul>
  );
};

SellingPoint.propTypes = {
  sellingPoints: PropTypes.arrayOf(PropTypes.string),
  showSellingPoint: PropTypes.bool
};

export default SellingPoint;
