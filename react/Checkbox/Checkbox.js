import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.less';
import classnames from 'classnames';
import { Icon, Text } from 'seek-asia-style-guide/react';

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
    rtl: PropTypes.bool,
    fullWidth: PropTypes.bool,
    compact: PropTypes.bool,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    checked: false,
    inputProps: {},
    rtl: false,
    fullWidth: false,
    compact: false,
    disabled: false
  };

  state = {
    checked: false,
    disabled: false
  }

  static getDerivedStateFromProps(props) {
    return {
      checked: props.checked || props.inputProps && props.inputProps.checked,
      disabled: props.disabled || props.inputProps && props.inputProps.disabled
    };
  }

  renderStandard(label, extraLabel, compact, checked, disabled, rtl) {
    const standardStyle = classnames({
      [styles.standard]: true,
      [styles.disabled]: disabled,
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
    const { label, id, extraLabel, compact, checked, disabled, rtl } = this.props;
    const componentType = classnames({
      [styles.label]: true
    });

    return (
      <label className={componentType} htmlFor={id}>
        {
          this.renderStandard(label, extraLabel, compact, checked, disabled, rtl)
        }
      </label>
    );
  }

  renderInput() {
    const { id, value, disabled, onChange, onFocus, onBlur, inputProps } = this.props;

    const allInputProps = {
      id,
      value,
      checked: this.state.checked,
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
    const { className, fullWidth, compact } = this.props;
    const rootClassNames = classnames({
      [styles.root]: true,
      [className]: className,
      [styles.fullWidth]: fullWidth,
      [styles.checked]: this.state.checked,
      [styles.disabled]: this.state.disabled,
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
