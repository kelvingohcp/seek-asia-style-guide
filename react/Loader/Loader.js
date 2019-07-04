import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.less';
import classnames from 'classnames';

export default function Loader({ _small, compact }) {
  return (
    <div className={classnames(styles.root, { [styles.small]: _small, [styles.compact]: compact })}>
      <div className={styles.ball} />
      <div className={styles.ball} />
      <div className={styles.ball} />
    </div>
  );
}

Loader.propTypes = {
  _small: PropTypes.bool,
  compact: PropTypes.bool
};

Loader.defaultProps = {
  _small: false,
  compact: false
};
