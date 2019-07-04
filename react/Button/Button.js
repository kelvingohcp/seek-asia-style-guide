/* eslint css-modules/no-unused-class: [2, { markAsUsed: [group] }] */
import styles from './Button.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Constants } from 'seek-asia-style-guide/react';
import classnames from 'classnames';
import getTenant from '../private/tenant';
import { StyleGuideContext } from '../StyleGuideProvider/StyleGuideProvider';

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
      'callToAction', 'primary', 'secondary', 'hyperlink', 'tertiary', 'ghostWhite'
    ]),
    compact: PropTypes.bool,
    component: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string
    ]),
    disabled: PropTypes.bool,
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
    const { color, compact, className, children, component, disabled, isSelected, ...restProps } = this.props;

    return (
      <StyleGuideContext.Consumer>
        { ({ tenant }) => {
          const { isJobsDB, isJobStreet } = getTenant(tenant);

          if (Constants.SEEKASIA === tenant && ['callToAction', 'ghostWhite'].includes(color)) {
            return <div>Not exist for SEEKASIA theme</div>;
          }

          const combinedProps = {
            className: classnames(styles.root, className, {
              [styles.compact]: compact,
              [styles.disabled]: disabled,
              [styles.jobsDB]: isJobsDB,
              [styles.jobStreet]: isJobStreet,
              [styles.root_callToAction]: color === 'callToAction',
              [styles.root_hyperlink]: color === 'hyperlink',
              [styles.root_primary]: color === 'primary',
              [styles.root_secondary]: color === 'secondary',
              [styles.root_tertiary]: color === 'tertiary',
              [styles.root_ghost_white]: color === 'ghostWhite',
              [styles.selected]: isSelected
            }),
            ref: this.storeButtonReference,
            ...restProps
          };
          return React.createElement(component, combinedProps, children);
        }}
      </StyleGuideContext.Consumer>
    );
  }
}
