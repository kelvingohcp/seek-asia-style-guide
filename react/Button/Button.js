import styles from './Button.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import * as tenant from '../private/tenant';

export default class Button extends Component {
  static displayName = 'Button';

  static propTypes = {
    'aria-pressed': PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    className: PropTypes.string,
    color: PropTypes.oneOf([
      'callToAction', 'primary', 'secondary', 'hyperlink', 'tertiary'
    ]).isRequired,
    compact: PropTypes.bool,
    component: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string
    ]),
    disabled: PropTypes.bool,
    isJobsDB: PropTypes.bool,
    isJobStreet: PropTypes.bool,
    isSelected: PropTypes.bool,
    role: PropTypes.string,
    tabIndex: PropTypes.number
  };

  static defaultProps = {
    'aria-pressed': false,
    className: '',
    component: 'button',
    role: 'button',
    tabIndex: 0
  };

  storeButtonReference = button => {
    if (button !== null) {
      this.button = button;
    }
  }

  render() {
    const { color, compact, className, children, component, disabled, isJobsDB, isJobStreet, isSelected, ...restProps } = this.props;

    const combinedProps = {
      className: classnames(styles.root, className, {
        [styles.compact]: compact,
        [styles.disabled]: disabled,
        [styles.jobsDB]: isJobsDB || tenant.isJobsDB,
        [styles.jobStreet]: isJobStreet || tenant.isJobStreet,
        [styles.root_callToAction]: color === 'callToAction',
        [styles.root_hyperlink]: color === 'hyperlink',
        [styles.root_primary]: color === 'primary',
        [styles.root_secondary]: color === 'secondary',
        [styles.root_tertiary]: color === 'tertiary',
        [styles.selected]: isSelected
      }),
      ref: this.storeButtonReference,
      ...restProps
    };

    return React.createElement(component, combinedProps, children);
  }
}
