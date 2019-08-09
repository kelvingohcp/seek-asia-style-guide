import styles from './DropdownList.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Text, Icon } from 'seek-asia-style-guide/react';

const LEFT = 'left';
const RIGHT = 'right';

export default class DropdownList extends Component {
  constructor() {
    super();

    this.state = {
      chevronDirection: 'down',
      isDropdownOpen: false
    };
  }

  toggleDropdown() {
    this.setState({
      chevronDirection: (this.state.chevronDirection === 'down') ? 'up' : 'down',
      isDropdownOpen: !this.state.isDropdownOpen
    });
  }

  render() {
    const { value, noShadow, className, children, compact, chevronAlignment, lowerLevel, iconPosition, ...restProps } = this.props;
    const rotateDirection = (iconPosition === LEFT) ? '180deg' : '-180deg';

    return (
      <div
        className={classnames({
          [styles.root]: true,
          [styles.noShadow]: noShadow,
          [styles.expanded]: this.state.isDropdownOpen,
          [styles.lowerLevel]: lowerLevel,
          [className]: className
        })} >
        <div
          className={classnames({ [styles.toggler]: true, [styles.leftChevron]: iconPosition === LEFT })}
          onClick={this.toggleDropdown.bind(this)} >
          <Text
            shouting={!compact}
            baseline={false}
            raw={true}
            {...restProps}>
            {value}
          </Text>
          <div className={styles.chevronBox}>
            <Icon type="chevron" smoothRotate rotation={this.state.chevronDirection === 'down' ? rotateDirection : 'reset'} />
          </div>
        </div>
        <div className={classnames({ [styles.dropdown]: true, [styles.opened]: this.state.isDropdownOpen })}>
          {children}
        </div>
      </div>
    );
  }
}

DropdownList.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  noShadow: PropTypes.bool,
  compact: PropTypes.bool,
  chevronAlignment: PropTypes.oneOf(['top', 'center', 'bottom']),
  lowerLevel: PropTypes.bool,
  iconPosition: PropTypes.oneOf([LEFT, RIGHT])
};

DropdownList.defaultProps = {
  noShadow: false,
  compact: false,
  chevronAlignment: 'top',
  lowerLevel: false,
  iconPosition: RIGHT
};
