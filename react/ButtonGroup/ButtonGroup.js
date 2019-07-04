/* eslint css-modules/no-unused-class: [2, { markAsUsed: [rootHover, rootActive, selected, root, compact, disabled, root_callToAction, jobsDB, jobStreet, root_primary, root_secondary, root_hyperlink, root_ghost_white, root_tertiary] }] */
import styles from '../Button/Button.less';

import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

export default function ButtonGroup({ className, children, ...restProps }) {
  return (
    <div {...restProps} className={classnames({ [className]: className, [styles.group]: true })}>
      {children}
    </div>
  );
}

ButtonGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
