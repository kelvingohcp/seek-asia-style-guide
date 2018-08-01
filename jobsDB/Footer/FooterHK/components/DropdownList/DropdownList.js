import styles from './DropdownList.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Text, ChevronIcon } from 'seek-asia-style-guide/react';

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
    const { value, compact, noShadow, descriptionProps, className, children } = this.props;
    return (
      <div
        className={classnames({
          [styles.root]: true,
          [styles.noShadow]: noShadow,
          [className]: className
        })} >
        <div className={styles.listItemValue} onClick={this.toggleDropdown.bind(this)} >
          <Text
            loud={!compact}
            waving={compact}
            baseline={false}
            className={styles.chevronRight}
            raw={true}
            {...descriptionProps}>
            {value}
          </Text>
          <ChevronIcon className={styles.chevronFixHeight} direction={this.state.chevronDirection} />
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
  compact: PropTypes.bool,
  noShadow: PropTypes.bool,
  descriptionProps: PropTypes.object
};

DropdownList.defaultProps = {
  compact: false,
  noShadow: false
};
