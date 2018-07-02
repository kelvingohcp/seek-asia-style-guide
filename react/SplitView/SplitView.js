import React from 'react';
import styles from './SplitView.less';
import PropTypes from 'prop-types';

export default function SplitView({ children }) {
  return (
    <div className={styles.root}>
      {children &&
        children.length > 0 && (
        <div className={styles.leftChild}>{children[0]}</div>
      )}
      {children &&
        children.length > 1 && (
        <div className={styles.rightChild}>{children.slice(1)}</div>
      )}
    </div>
  );
}

SplitView.propTypes = {
  children: PropTypes.node.isRequired
};
