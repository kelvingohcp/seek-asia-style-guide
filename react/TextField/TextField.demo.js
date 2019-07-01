import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from './TextField';
import * as sketch from './TextField.sketch';
import fieldMessageOptions from '../private/FieldMessage/FieldMessage.demo';
import fieldLabelOptions from '../private/FieldLabel/FieldLabel.demo';

class TextFieldContainer extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    componentProps: PropTypes.object.isRequired
  };

  constructor() {
    super();

    this.state = {
      inputValue: ''
    };
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  handleClear = () => {
    this.setState({
      inputValue: ''
    });
  };

  render() {
    const { component: DemoComponent, componentProps } = this.props;
    const { inputValue } = this.state;

    return (
      <div style={{ width: '300px' }}>
        <DemoComponent
          {...componentProps}
          onChange={this.handleChange}
          value={inputValue}
          onClear={this.handleClear}
        />
      </div>
    );
  }
}

export default {
  route: '/textfield',
  title: 'Text Field',
  component: TextField,
  container: TextFieldContainer,
  sketch,
  initialProps: {
    id: 'firstName',
    label: 'First Name',
    message: 'e.g. Olivia',
    // Documentation only:
    onChange: () => {},
    value: '...',
    onClear: () => {}
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Compact',
          transformProps: ({ className, ...props }) => ({
            ...props,
            compact: true
          })
        }
      ]
    },
    ...fieldMessageOptions,
    ...fieldLabelOptions,
    {
      label: 'Type',
      type: 'radio',
      states: [
        {
          label: 'Text',
          transformProps: props => props
        },
        {
          label: 'Password',
          transformProps: ({ className, ...props }) => ({
            ...props,
            type: 'password'
          })
        },
        {
          label: 'Email',
          transformProps: ({ className, ...props }) => ({
            ...props,
            type: 'email'
          })
        },
        {
          label: 'Number',
          transformProps: ({ className, ...props }) => ({
            ...props,
            type: 'number'
          })
        },
        {
          label: 'Search',
          transformProps: ({ className, ...props }) => ({
            ...props,
            type: 'search'
          })
        },
        {
          label: 'Tel',
          transformProps: ({ className, ...props }) => ({
            ...props,
            type: 'tel'
          })
        },
        {
          label: 'Url',
          transformProps: ({ className, ...props }) => ({
            ...props,
            type: 'url'
          })
        }
      ]
    },
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Placeholder',
          transformProps: ({ className, ...props }) => ({
            ...props,
            placeholder: 'Text field'
          })
        }
      ]
    },
    {
      label: 'Masked Input',
      type: 'radio',
      states: [
        {
          label: 'No masking',
          transformProps: props => props
        },
        {
          label: 'Credit card',
          transformProps: props => ({
            ...props,
            mask: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
            inputProps: {
              placeholder: '____ ____ ____ ____',
              keepCharPositions: true
            }
          })
        },
        {
          label: 'Date',
          transformProps: props => ({
            ...props,
            mask: [/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
            inputProps: {
              placeholder: 'mm/yyyy',
              keepCharPositions: true
            }
          })
        },
        {
          label: 'Car plate',
          transformProps: props => ({
            ...props,
            mask: [/[A-Z]/i, /[A-Z]/i, /[A-Z]/i, ' ', /\d/, /\d/, /\d/, /\d/],
            inputProps: {
              placeholder: 'ABC 1234',
              keepCharPositions: true,
              pipe: conformedValue => conformedValue.toUpperCase()
            }
          })
        }
      ]
    }
  ]
};
