import styles from './Tag.less';
import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text/Text';

export default function Tag({
  label
}) {
  return (
    <span className={styles.root}>
      <Text className={styles.tagLabel} whistling strong>{label}</Text>
    </span >
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired
};

