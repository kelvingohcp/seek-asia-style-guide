import React from 'react';
import Badge from './Badge';
import * as sketch from './Badge.sketch';
export default {
  route: '/badge',
  title: 'Badge',
  component: Badge,
  sketch,
  initialProps: {
    label: 'Default'
  },
  options: [
    {
      label: 'Color',
      type: 'radio',
      states: [
        {
          label: 'Default',
          transformProps: props => ({
            ...props,
            label: 'Default',
            color: 'default'
          })
        },
        {
          label: 'Progressing',
          transformProps: props => ({
            ...props,
            label: 'Progressing',
            color: 'progressing'
          })
        },
        {
          label: 'Declined',
          transformProps: props => ({
            ...props,
            label: 'Declined',
            color: 'declined'
          })
        },
        {
          label: 'Expired',
          transformProps: props => ({
            ...props,
            label: 'Expired',
            color: 'expired'
          })
        },
        {
          label: 'New',
          transformProps: props => ({
            ...props,
            label: 'New',
            color: 'new'
          })
        }
      ]
    },
    {
      label: 'is Bold',
      type: 'checklist',
      states: [
        {
          label: 'Bold',
          transformProps: props => ({
            ...props,
            isBold: true
          })
        }
      ]
    }
  ]
};
