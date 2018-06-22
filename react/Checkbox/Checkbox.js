import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.less';
import CheckMarkIcon from '../CheckMarkIcon/CheckMarkIcon';
import classnames from 'classnames';
import { Text } from 'seek-asia-style-guide/react';

const STANDARD = 'standard';
const BUTTON = 'button';
const LEFT = 'left';
const RIGHT = 'right';

function combineClassNames(props = {}, ...classNames) {
  const { className, ...restProps } = props;

  return {
    className: classnames.apply(null, [...classNames, className]), // eslint-disable-line no-useless-call
    ...restProps
  };
}

export default class Checkbox extends Component {
  static displayName = 'Checkbox';

  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired,
    extraLabel: PropTypes.node,
    value: PropTypes.string,
    className: PropTypes.string,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    inputProps: PropTypes.object,
    type: PropTypes.oneOf([STANDARD, BUTTON]),
    position: PropTypes.oneOf([LEFT, RIGHT]),
    fullWidth: PropTypes.bool,
    compact: PropTypes.bool
  };

  static defaultProps = {
    className: '',
    checked: false,
    inputProps: {},
    type: STANDARD,
    position: LEFT,
    fullWidth: false,
    compact: false
  };

  renderButton(label) {
    return <span className={styles.button}>{label}</span>;
  }

  renderStandard(label, extraLabel) {
    return (
      <div className={styles.standard}>
        {this.renderCheckBox(LEFT)}
        <span className={styles.standardLabel}>
          {label}
          {extraLabel && (
            <Text baseline={false} className={styles.extraLabel} whispering>
              {extraLabel}
            </Text>
          )}
        </span>
        {this.renderCheckBox(RIGHT)}
      </div>
    );
  }

  renderCheckBox(currentPosition) {
    const {
      position,
      inputProps: { checked }
    } = this.props;
    const checkBoxStyle = classnames(
      styles.checkBox,
      position === LEFT ? styles.checkBoxLeft : styles.checkBoxRight,
      checked ? styles.checked : null
    );

    return (
      position === currentPosition && (
        <CheckMarkIcon
          svgClassName={styles.checkMark}
          className={checkBoxStyle}
        />
      )
    );
  }

  renderLabel() {
    const { label, id, type, extraLabel } = this.props;

    return (
      <label className={styles.label} htmlFor={id}>
        {type === STANDARD
          ? this.renderStandard(label, extraLabel)
          : this.renderButton(label)}
      </label>
    );
  }

  renderInput() {
    const {
      id,
      value,
      checked,
      onChange,
      onFocus,
      onBlur,
      inputProps
    } = this.props;

    const allInputProps = {
      id,
      value,
      checked,
      onChange,
      onFocus,
      onBlur,
      ...combineClassNames(inputProps, styles.input),
      type: 'checkbox'
    };

    return <input {...allInputProps} />;
  }

  render() {
    const { className, fullWidth, compact } = this.props;

    const rootClassNames = classnames({
      [styles.root]: true,
      [className]: className,
      [styles.fullWidth]: fullWidth,
      [styles.compact]: compact
    });

    return (
      <div className={rootClassNames}>
        {this.renderInput()}
        {this.renderLabel()}
      </div>
    );
  }
}
