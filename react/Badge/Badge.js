import styles from './Badge.less';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Text from '../Text/Text';

export default function Badge({
  label,
  color,
  isBold
}) {
  let colorStyle = styles.default;
  switch (color) {
    case 'progressing':
      colorStyle = styles.progressing;
      break;
    case 'declined':
      colorStyle = styles.declined;
      break;
    case 'expired':
      colorStyle = styles.expired;
      break;
    case 'new':
      colorStyle = styles.new;
      break;
    case 'default':
    default:
      colorStyle = styles.default;
      break;
  }

  return (
    <span className={classnames({ [styles.root]: true, [styles.isBold]: isBold }, colorStyle)}>
      <Text className={classnames(styles.badgeLabel)} whispering regular={!isBold} strong={isBold}>{label}</Text>
    </span >
  );
}

Badge.propTypes = {
  label: PropTypes.string.isRequired,
  isBold: PropTypes.bool,
  color: PropTypes.oneOf([
    'progressing', 'default', 'declined', 'expired', 'new'
  ])
};

