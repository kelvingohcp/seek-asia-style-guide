import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.less';
import classnames from 'classnames';
import { Icon, Text } from 'seek-asia-style-guide/react';

const STANDARD = 'standard';
const BUTTON = 'button';

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
    rtl: PropTypes.bool,
    fullWidth: PropTypes.bool,
    compact: PropTypes.bool,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    checked: false,
    inputProps: {},
    type: STANDARD,
    rtl: false,
    fullWidth: false,
    compact: false,
    disabled: false
  };

  renderButton(label) {
    return (
      <span className={styles.mainLabel}>
        {label}
      </span>
    );
  }

  renderStandard(label, extraLabel, compact, checked, rtl) {
    const standardStyle = classnames({
      [styles.standard]: true,
      [styles.rtl]: rtl
    });
    return (
      <div className={standardStyle}>
        {this.renderCheckBox()}
        <span className={styles.mainLabel}>
          <Text baseline={false} className={styles.standardLabel} intimate={compact} strong={checked}>{label}</Text>
          {extraLabel && <Text baseline={false} className={styles.extraLabel} whispering strong={checked}>{extraLabel}</Text>}
        </span>
      </div>
    );
  }

  renderCheckBox() {
    return (
      <div className={styles.checkBox}>
        <Icon type="check" svgClassName={styles.checkMark} />
      </div>
    );
  }

  renderLabel() {
    const { label, id, type, extraLabel, compact, checked, rtl } = this.props;
    const componentType = classnames({
      [styles.label]: true,
      [styles.btn]: type === BUTTON
    });

    return (
      <label className={componentType} htmlFor={id}>
        {
          type === STANDARD ?
            this.renderStandard(label, extraLabel, compact, checked, rtl) :
            this.renderButton(label)
        }
      </label>
    );
  }

  renderInput() {
    const { id, value, checked, disabled, onChange, onFocus, onBlur, inputProps } = this.props;

    const allInputProps = {
      id,
      value,
      checked,
      disabled,
      onChange,
      onFocus,
      onBlur,
      ...combineClassNames(inputProps, styles.input),
      type: 'checkbox'
    };

    return (
      <input {...allInputProps} />
    );
  }

  render() {
    const { className, fullWidth, checked, compact } = this.props;

    const rootClassNames = classnames({
      [styles.root]: true,
      [className]: className,
      [styles.fullWidth]: fullWidth,
      [styles.checked]: checked,
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
