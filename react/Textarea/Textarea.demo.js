import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Textarea from './Textarea';
import fieldMessageOptions from '../private/FieldMessage/FieldMessage.demo';
import fieldLabelOptions from '../private/FieldLabel/FieldLabel.demo';

class TextareaContainer extends Component {
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

  render() {
    const { component: DemoComponent, componentProps } = this.props;
    const { inputValue } = this.state;

    return (
      <DemoComponent
        {...componentProps}
        onChange={this.handleChange}
        value={inputValue}
      />
    );
  }
}

export default {
  route: '/textarea',
  title: 'Textarea',
  component: Textarea,
  container: TextareaContainer,
  seekComponent: true,
  initialProps: {
    id: 'description',
    label: 'Description',
    message: '',
    // Documentation only:
    onChange: () => {},
    value: '...'
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Show Count',
          transformProps: props => ({
            ...props,
            countFeedback: value => ({
              count: 500 - value.length
            })
          })
        },
        {
          label: 'Description',
          transformProps: props => ({
            ...props,
            description: 'Describe a descriptive description descriptively'
          })
        },
        {
          label: 'Placeholder',
          transformProps: props => ({
            ...props,
            placeholder: 'placeholder text'
          })
        },
        {
          label: 'Compact',
          transformProps: props => ({
            ...props,
            compact: true
          })
        }
      ]
    },
    ...fieldMessageOptions,
    ...fieldLabelOptions
  ]
};
