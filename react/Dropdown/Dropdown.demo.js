import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown';
import styles from './Dropdown.less';
import classnames from 'classnames';
import fieldMessageOptions from '../private/FieldMessage/FieldMessage.demo';
import fieldLabelOptions from '../private/FieldLabel/FieldLabel.demo';

class DropdownContainer extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    componentProps: PropTypes.object.isRequired
  };

  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    const { component: DemoComponent, componentProps } = this.props;
    const { value } = this.state;

    return (
      <DemoComponent
        {...componentProps}
        value={value}
        onChange={this.handleChange}
      />
    );
  }
}

export default {
  route: '/dropdown',
  title: 'Dropdown',
  component: Dropdown,
  container: DropdownContainer,
  initialProps: {
    id: 'jobTitles',
    label: 'Job Titles',
    placeholder: 'Select a job title...',
    message: '',
    options: [
      {
        label: 'Really really long job title that is not gonna fit',
        value: '3',
        props: { disabled: true }
      },
      {
        label: 'Major Cities',
        value: [
          { label: 'Melbourne', value: '3004' },
          { label: 'Sydney', value: '3002' }
        ]
      },
      {
        label: 'Ballarat',
        value: '3005'
      }
    ],
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
          label: 'Focus',
          transformProps: ({ className, ...props }) => ({
            ...props,
            className: classnames(className, styles.rootFocus)
          })
        },
        {
          label: 'Placeholder selectable',
          transformProps: ({ className, ...props }) => ({
            ...props,
            placeholderSelectable: !props.placeholderSelectable
          })
        },
        {
          label: 'Disabled',
          transformProps: props => ({
            ...props,
            disabled: true
          })
        }
      ]
    },
    ...fieldMessageOptions,
    ...fieldLabelOptions
  ]
};
