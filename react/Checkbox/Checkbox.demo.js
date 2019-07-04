import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import * as sketch from './Checkbox.sketch';
import demoStyles from './Checkbox.demo.less';
import classnames from 'classnames';

class CheckboxContainer extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    componentProps: PropTypes.object.isRequired
  };

  constructor() {
    super();

    this.state = {
      checked: false
    };
  }

  handleChange = event => {
    this.setState({
      checked: event.target.checked
    });
  };

  render() {
    const { component: DemoComponent, componentProps } = this.props;
    const { checked } = this.state;
    const classNames = classnames({
      [demoStyles.root]: true, // eslint-disable-line
      [demoStyles.fullWidth]: componentProps.fullWidth
    });

    return (
      <div className={classNames}>
        <DemoComponent
          {...componentProps}
          checked={checked}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default {
  route: '/checkbox',
  title: 'Checkbox',
  component: Checkbox,
  container: CheckboxContainer,
  sketch,
  initialProps: {
    id: 'stillInRole',
    label: 'Still in role',
    extraLabel: '(All)',
    // Documentation only:
    checked: false,
    onChange: () => {}
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Full width',
          transformProps: props => ({
            ...props,
            fullWidth: true
          })
        }
      ]
    },
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Compact',
          transformProps: props => ({
            ...props,
            compact: true
          })
        },
        {
          label: 'Disabled',
          transformProps: props => ({
            ...props,
            inputProps: {
              disabled: true
            }
          })
        }
      ]
    },
    {
      label: 'Checkbox position',
      type: 'radio',
      states: [
        {
          label: 'Left',
          transformProps: props => ({
            ...props
          })
        },
        {
          label: 'Right',
          transformProps: props => ({
            ...props,
            rtl: true
          })
        }
      ]
    }
  ]
};
