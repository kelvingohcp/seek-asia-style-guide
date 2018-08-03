import styles from './DropdownList.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Text, ChevronIcon, ListItem, Button } from 'seek-asia-style-guide/react';

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
    const { value, noShadow, className, children, compact, ...restProps } = this.props;

    const listItemProps = { noShadow: true };
    const dropdownListProps = { noShadow: true, className: styles.lowerLevel };
    const buttonProps = { className: styles.button };
    if (compact) {
      listItemProps.compact = compact;
      buttonProps.compact = compact;
      dropdownListProps.compact = compact;
    }

    return (
      <div
        className={classnames({
          [styles.root]: true,
          [styles.noShadow]: noShadow,
          [styles.expanded]: this.state.isDropdownOpen,
          [className]: className
        })} >
        <div className={styles.listItemValue} onClick={this.toggleDropdown.bind(this)} >
          <Text
            shouting={!compact}
            baseline={false}
            className={styles.chevronRight}
            raw={true}
            {...restProps}>
            {value}
          </Text>
          <ChevronIcon className={styles.chevronFixHeight} direction={this.state.chevronDirection} />
        </div>
        <div className={this.state.isDropdownOpen ? styles.dropdown : styles.dropdownNoShow}>
          {
            React.Children.map(children, child => {
              switch (child.type) {
                case ListItem: return React.cloneElement(child, listItemProps);
                case DropdownList: return React.cloneElement(child, dropdownListProps);
                case Button: return React.cloneElement(child, buttonProps);
                default: return child;
              }
            })
          }
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
  compact: PropTypes.bool
};

DropdownList.defaultProps = {
  noShadow: false,
  compact: false
};
