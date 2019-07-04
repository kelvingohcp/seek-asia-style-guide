import styles from './SlideToggle.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from '../Text/Text';
import classnames from 'classnames';

export default class SlideToggle extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    hideLabel: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    toggleAfterLabel: PropTypes.bool
  }

  static defaultProps = {
    hideLabel: false,
    toggleAfterLabel: false
  };

  render() {
    const { checked, className, hideLabel, id, label, onChange, toggleAfterLabel } = this.props;
    let labelContent;

    if (hideLabel) {
      labelContent = null;
    } else {
      labelContent = <Text baseline={false} className={styles.label}> {label} </Text>;
    }

    return (
      <label htmlFor={id} className={classnames(styles.root, className)}>
        <div
          className={classnames({
            [styles.switch]: true,
            [styles.toggleAfterLabel]: toggleAfterLabel === true
          })}>
          <input
            aria-label={label}
            aria-checked={checked}
            className={styles.input}
            checked={checked}
            id={id}
            onChange={onChange}
            ref={this.storeInputRef}
            tabIndex="0"
            type="checkbox"
          />
          <div className={styles.slider} />
          {labelContent}
        </div>
      </label>
    );
  }
}
