import styles from './Badge.less';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Badge({
  label,
  color,
  isBold,
  ...restProps
}) {
  let colorStyle = styles.default;
  switch (color) {
    case 'progressing':

      colorStyle = isBold ? styles.boldProgressing : styles.subtleProgressing;
      break;
    case 'declined':
      colorStyle = isBold ? styles.boldDeclined : styles.subtleDeclined;
      break;
    case 'expired':
      colorStyle = isBold ? styles.boldExpired : styles.subtleExpired;
      break;
    case 'new':
      colorStyle = isBold ? styles.boldNew : styles.subtleNew;
      break;
    case 'default':
    default:
      colorStyle = isBold ? styles.boldDefault : styles.subtleDefault;
      break;
  }

  return (
    <span className={classnames(styles.badge, colorStyle, isBold ? styles.bold : styles.subtle)}>
      {label}
    </span>
  );
}

Badge.propTypes = {
  label: PropTypes.string.isRequired,
  isBold: PropTypes.bool,
  color: PropTypes.oneOf([
    'progressing', 'default', 'declined', 'expired', 'new'
  ])
};

