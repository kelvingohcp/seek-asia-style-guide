import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radio from './Radio';
import Text from '../Text/Text';
import * as sketch from './Radio.sketch';
import demoStyles from './Radio.demo.less';
import classnames from 'classnames';

class RadioContainer extends Component {
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

  handleYes = () => {
    this.setState({
      value: 'Yes'
    });
  };

  handleNo = () => {
    this.setState({
      value: 'No'
    });
  };

  handleMaybe = () => {
    this.setState({
      value: 'Maybe'
    });
  };

  render() {
    const { component: DemoComponent, componentProps } = this.props;
    const { value } = this.state;
    const classNames = classnames({
      [demoStyles.root]: true, // eslint-disable-line
      [demoStyles.fullWidth]: componentProps.fullWidth
    });

    return (
      <div className={classNames}>
        <Text shouting>Still in role</Text>
        <DemoComponent
          {...componentProps}
          id="Yes"
          label="Yes"
          checked={value === 'Yes'}
          onChange={this.handleYes}
        />
        <DemoComponent
          {...componentProps}
          id="No"
          label="No"
          checked={value === 'No'}
          onChange={this.handleNo}
        />
        <DemoComponent
          {...componentProps}
          id="Maybe"
          label="Maybe"
          checked={value === 'Maybe'}
          onChange={this.handleMaybe}
        />
      </div>
    );
  }
}

export default {
  route: '/radio',
  title: 'Radio',
  category: 'Form',
  component: Radio,
  container: RadioContainer,
  sketch,
  initialProps: {
    name: 'stillInRole',
    // Documentation only:
    id: 'myRadio',
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
      label: 'Disabled',
      type: 'checklist',
      states: [
        {
          label: 'Disabled',
          transformProps: props => ({
            ...props,
            disabled: true
          })
        }
      ]
    },
    {
      label: 'Icon style',
      type: 'radio',
      states: [
        {
          label: 'Icon style',
          transformProps: props => ({
            ...props
          })
        },
        {
          label: 'Tick',
          transformProps: props => ({
            ...props,
            iconType: 'tick'
          })
        }
      ]
    },
    {
      label: 'Radio position',
      type: 'radio',
      states: [
        {
          label: 'Icon at front',
          transformProps: props => ({
            ...props
          })
        },
        {
          label: 'Icon at back',
          transformProps: props => ({
            ...props,
            rtl: true
          })
        }
      ]
    }
  ]
};
