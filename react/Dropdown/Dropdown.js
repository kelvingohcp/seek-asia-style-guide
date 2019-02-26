import styles from './Dropdown.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FieldMessage from '../private/FieldMessage/FieldMessage';
import FieldLabel from '../private/FieldLabel/FieldLabel';
import { Icon } from 'seek-asia-style-guide/react';

function combineClassNames(props = {}, ...classNames) {
  const { className, ...restProps } = props;

  return {
    className: classnames.apply(null, [...classNames, className]), // eslint-disable-line no-useless-call
    ...restProps
  };
}

export default class Dropdown extends Component {
  static displayName = 'Dropdown';

  static propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    valid: PropTypes.bool,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    inputProps: PropTypes.object,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([
          PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.string,
            label: PropTypes.string,
            props: PropTypes.object
          })),
          PropTypes.string
        ]).isRequired,
        label: PropTypes.string,
        props: PropTypes.object
      })
    ),
    placeholder: PropTypes.string,
    placeholderSelectable: PropTypes.bool
  };

  static defaultProps = {
    className: '',
    placeholder: '',
    options: [],
    inputProps: {},
    placeholderSelectable: false
  };

  constructor() {
    super();

    this.renderSelect = this.renderSelect.bind(this);
  }

  renderOption({ value, label, props }) {
    return (
      <option value={value} key={value} className={styles.option} {...props}>
        {label}
      </option>
    );
  }

  renderSelect() {
    const { id, value, onChange, onFocus, onBlur, inputProps, options, placeholder, disabled } = this.props;
    const inputStyles = classnames({
      [styles.disabled]: disabled,
      [styles.dropdown]: true,
      [styles.placeholderSelected]: !value && !inputProps.value && placeholder
    });
    const allInputProps = {
      id,
      value,
      onChange,
      onFocus,
      onBlur,
      'aria-describedby': `${id}-message`, // Order is important here so passed in inputProps can overide this if requried
      ...combineClassNames(inputProps, inputStyles)
    };

    return (
      <select {...allInputProps} disabled={this.props.disabled}>
        <option value="" disabled={!this.props.placeholderSelectable} className={classnames({ [styles.noPlaceholder]: !placeholder })}>
          {placeholder}
        </option>
        {
          options.map(option => {
            if (Array.isArray(option.value)) {
              return (<optgroup value="" label={option.label} key={option.label}>{option.value.map(this.renderOption)}</optgroup>);
            }
            return this.renderOption(option);
          })
        }
      </select>
    );
  }

  renderChevron() {
    const { disabled } = this.props;
    const classNames = classnames({
      [styles.chevron]: true,
      [styles.disabled]: disabled
    });

    return (
      <div className={classNames}>
        <Icon rotation="180deg" size="small" svgClassName={styles.chevronSvg} type="chevron" />
      </div>
    );
  }

  render() {
    const { className, valid } = this.props;
    const classNames = classnames({
      [styles.root]: true,
      [styles.invalid]: valid === false,
      [className]: className
    });

    // eslint-disable-next-line react/prop-types
    const { id, label, labelProps, secondaryLabel, tertiaryLabel, invalid, help, helpProps, message, messageProps } = this.props;

    return (
      <div className={classNames}>
        <FieldLabel {...{ id, label, labelProps, secondaryLabel, tertiaryLabel }} />
        {this.renderChevron()}
        {this.renderSelect()}
        <FieldMessage {...{ invalid, help, helpProps, valid, message, messageProps }} />
      </div>
    );
  }
}
