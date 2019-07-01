import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './Hidden.less';

const Hidden = ({ children, component, className, print, screen, mobile, aboveMobile, desktop, ...restprops }) => {
  const props = {
    ...restprops,
    className: classNames({
      [className]: className,
      [styles.desktop]: desktop,
      [styles.mobile]: mobile,
      [styles.print]: print,
      [styles.screen]: screen,
      [styles.aboveMobile]: aboveMobile
    })
  };

  return React.createElement(component, props, children);
};

Hidden.propTypes = {
  children: PropTypes.node,
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string
  ]),
  className: PropTypes.string,
  desktop: PropTypes.bool,
  mobile: PropTypes.bool,
  print: PropTypes.bool,
  screen: PropTypes.bool,
  aboveMobile: PropTypes.bool
};

Hidden.defaultProps = {
  className: '',
  component: 'span',
  desktop: false,
  mobile: false,
  print: false,
  screen: false,
  aboveMobile: false
};

export default Hidden;
