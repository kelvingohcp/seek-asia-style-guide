import styles from './Card.less';
import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

export default function Card({ className, children, group, transparent, ...restProps }) {
  return (
    <div
      {...restProps}
      className={classnames({
        [styles.root]: true,
        [styles.group]: group,
        [styles.transparent]: transparent,
        [className]: className
      })}>
      {children}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  group: PropTypes.bool,
  transparent: PropTypes.bool
};
