import styles from './ScreenReaderOnly.less';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ScreenReaderOnly = ({ component, children, ...restProps }) => {
  const combinedProps = {
    className: classnames(styles.root),
    ...restProps
  };
  return React.createElement(component, combinedProps, children);
};

ScreenReaderOnly.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string
  ])
};

export default ScreenReaderOnly;
