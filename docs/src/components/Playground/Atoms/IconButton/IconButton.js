import styles from './IconButton.less';
import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'seek-asia-style-guide/react';

export default function IconButton({ children, icon }) {
  return (
    <button className={styles.root}>
      {icon === 'plus' ? <Icon type="add" size="small" /> : null }
      {icon === 'delete' ? <Icon type="remove" size="small" /> : null }
      {children}
    </button>
  );
}

IconButton.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.oneOf(['plus', 'delete']).isRequired
};
