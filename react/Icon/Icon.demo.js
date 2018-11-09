import React from 'react';
import Icon from './Icon';
import IconPack from './Icon.path';
import PropTypes from 'prop-types';
import * as sketch from './Icon.sketch';
import { PageBlock } from 'seek-asia-style-guide/react';

const IconContainer = ({ component: DemoComponent, componentProps }) => {
  return (
    <PageBlock style={'width: 100%;'}>
      <DemoComponent {...componentProps} />
    </PageBlock>
  );
};

IconContainer.propTypes = {
  component: PropTypes.func,
  componentProps: PropTypes.object
};

const getSvgPaths = IconPack.map(obj => {
  const rObj = {
    label: obj.label,
    transformProps: props => ({
      ...props,
      type: obj.name
    })
  };
  return rObj;
});
export default {
  route: '/icon',
  title: 'Icon',
  component: Icon,
  sketch,
  initialProps: {
    type: 'birthdate',
    size: '',
    animation: ''
  },
  options: [
    {
      label: 'Type',
      type: 'radio',
      states: getSvgPaths
    },
    {
      label: 'Size',
      type: 'radio',
      states: [
        {
          label: 'Normal size',
          transformProps: props => props
        },
        {
          label: 'Small size',
          transformProps: props => ({
            ...props,
            size: 'small'
          })
        },
        {
          label: 'Large size',
          transformProps: props => ({
            ...props,
            size: 'large'
          })
        }
      ]
    },
    {
      label: 'Rotate',
      type: 'radio',
      states: [
        {
          label: 'No rotation',
          transformProps: props => props
        },
        {
          label: '90 degree',
          transformProps: props => ({
            ...props,
            rotation: '90deg'
          })
        },
        {
          label: '180 degree',
          transformProps: props => ({
            ...props,
            rotation: '180deg'
          })
        },
        {
          label: '-90 degree',
          transformProps: props => ({
            ...props,
            rotation: '-90deg'
          })
        },
        {
          label: '-180 degree',
          transformProps: props => ({
            ...props,
            rotation: '-180deg'
          })
        },
        {
          label: '90 deg (animated)',
          transformProps: props => ({
            ...props,
            smoothRotate: true,
            rotation: '90deg'
          })
        },
        {
          label: '180 deg (animated)',
          transformProps: props => ({
            ...props,
            smoothRotate: true,
            rotation: '180deg'
          })
        },
        {
          label: '-90 deg (animated)',
          transformProps: props => ({
            ...props,
            smoothRotate: true,
            rotation: '-90deg'
          })
        },
        {
          label: '-180 deg (animated)',
          transformProps: props => ({
            ...props,
            smoothRotate: true,
            rotation: '-180deg'
          })
        }
      ]
    },
    {
      label: 'One time animation',
      type: 'radio',
      states: [
        {
          label: 'One time animation',
          transformProps: props => props
        },
        {
          label: 'Bounce',
          transformProps: props => ({
            ...props,
            animation: 'bounce'
          })
        },
        {
          label: 'Pop in',
          transformProps: props => ({
            ...props,
            animation: 'popIn'
          })
        }
      ]
    }
  ]
};
