import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageSliderIndicator.less';

export default function ImageSliderIndicator({ length, position }) {
  const indicators = [];

  for (let index = 0; index < length; index++) {
    indicators.push(<li key={index} className={index === position ? styles.pipActive : styles.pip} />);
  }
  return (
    <div className={styles.container}>
      <ol>{indicators}</ol>
    </div>
  );
}

ImageSliderIndicator.propTypes = {
  length: PropTypes.number,
  position: PropTypes.number
};
