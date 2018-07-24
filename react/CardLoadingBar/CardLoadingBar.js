import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardLoadingBar.less';
import classnames from 'classnames';
import { getMultipliedGridLength } from '../../theme/layout/grid';

const CardLoadingBar = ({ width = 0, height = 1, inverse = false, className }) => {
  const HEIGHT_MULTIPLIER = 3;
  const barHeight = getMultipliedGridLength(height * HEIGHT_MULTIPLIER);
  const barWidth = Number.isInteger(width) ? getMultipliedGridLength(width) : width;
  return (
    <div className={classnames(styles.loadingBar, className)} style={{ height: barHeight }}>
      <div
        className={styles.maskedLoadingBar}
        style={{ [(inverse) ? 'right' : 'left']: barWidth }}
      />
    </div>
  );
};

CardLoadingBar.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number,
  inverse: PropTypes.bool,
  className: PropTypes.string
};

export default CardLoadingBar;
