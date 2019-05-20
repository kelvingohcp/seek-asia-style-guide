import styles from './DropdownList.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Text, ChevronIcon } from 'seek-asia-style-guide/react';

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
    const chevronAlignmentStyle = {
      top: styles.top,
      center: styles.center,
      bottom: styles.bottom
    }[chevronAlignment];

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
          className={classnames({ [styles.toggler]: true, [styles.position]: iconPosition === LEFT })}
          onClick={this.toggleDropdown.bind(this)} >
          <Text
            shouting={!compact}
            baseline={false}
            className={classnames({ [styles.description]: true, [styles.padding]: iconPosition === LEFT })}
            raw={true}
            {...restProps}>
            {value}
          </Text>
          <ChevronIcon
            className={classnames({
              [styles.chevron]: true,
              [chevronAlignmentStyle]: chevronAlignmentStyle
            })}
            svgClassName={styles.chevronSvg}
            direction={this.state.chevronDirection}
          />
        </div>
        <div className={this.state.isDropdownOpen ? styles.dropdown : styles.dropdownNoShow}>
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
