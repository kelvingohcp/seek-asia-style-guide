import styles from './TextLink.less';

import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'seek-asia-style-guide/react';
import classnames from 'classnames';

const renderChevron = chevron => {
  if (!chevron) {
    return null;
  }
  let rotation = 'reset';
  switch (chevron) {
    case 'left':
      rotation = '-90deg';
      break;
    case 'right':
      rotation = '90deg';
      break;
    case 'down':
      rotation = '180deg';
      break;
    default:
      rotation = 'reset';
  }
  return (
    <Icon
      className={styles.chevron}
      svgClassName={styles.chevronSvg}
      rotation={rotation}
      size="small"
      type="chevron"
    />
  );
};

export default function TextLink({ component: Root, className, children, chevron, ...restProps }) {
  const allProps = {
    ...restProps,
    className: classnames(styles.link, className)
  };

  return (
    <Root {...allProps}>
      {children}
      {renderChevron(chevron)}
    </Root>
  );
}

TextLink.displayName = 'TextLink';

TextLink.propTypes = {
  component: PropTypes.any,
  className: PropTypes.string,
  children: PropTypes.node,
  chevron: PropTypes.oneOf(['up', 'down', 'right', 'left'])
};

TextLink.defaultProps = {
  component: 'a'
};
