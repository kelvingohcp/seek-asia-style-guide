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
    label: PropTypes.node,
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

    return <input {...allInputProps} />;
  }

  render() {
    const { checked, className, compact, disabled, extraLabel, fullWidth, id, label, rtl } = this.props;
    const rootClassNames = classnames({
      [styles.root]: true,
      [className]: className,
      [styles.checked]: checked,
      [styles.compact]: compact,
      [styles.disabled]: disabled,
      [styles.fullWidth]: fullWidth,
      [styles.rtl]: rtl
    });

    return (
      <label className={rootClassNames} htmlFor={id}>
        {this.renderInput()}
        <div className={styles.checkBox}>
          <Icon type="check" svgClassName={styles.checkMark} />
        </div>
        {(label || extraLabel) && (
          <div className={styles.label}>
            <Text baseline={false} intimate={compact} strong={checked} className={styles.labelText}>{label}</Text>
            {extraLabel && <Text baseline={false} whispering strong={checked} className={styles.labelTextSecondary}>{extraLabel}</Text>}
          </div>)}
      </label>
    );
  }
}
