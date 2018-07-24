import React from 'react';
import Card from '../Card/Card';
import styles from './CardLoader.less';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const CardLoader = ({ children, className }) => {
  return (
    <Card className={classnames(styles.root, className)}>
      <div className={styles.animatedBackground}>
        {children}
      </div>
    </Card>
  );
};

CardLoader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default CardLoader;
