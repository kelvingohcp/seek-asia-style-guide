import React from 'react';
import DropdownList from './DropdownList';
import * as sketch from './DropdownList.sketch';
import { ListItem } from 'seek-asia-style-guide/react';

const list = [
  <ListItem key="1" value="Children 1" />,
  <ListItem key="2" value="Children 2" />,
  <ListItem key="3" value="Children 3" />,
  <ListItem key="4" value="Children 4" />
];

export default {
  route: '/DropdownList',
  title: 'Dropdown List',
  component: DropdownList,
  sketch,
  initialProps: {
    value: 'Category',
    children: list
  },
  options: [
    {
      label: 'Compact',
      type: 'checklist',
      states: [
        {
          label: 'Compact',
          transformProps: props => ({
            ...props,
            compact: true
          })
        }
      ]
    },
    {
      label: 'No shadow',
      type: 'checklist',
      states: [
        {
          label: 'No shadow',
          transformProps: props => ({
            ...props,
            noShadow: true
          })
        }
      ]
    },
    {
      label: 'Description Text Weight',
      type: 'radio',
      states: [
        {
          label: 'Regular',
          transformProps: props => props
        },
        {
          label: 'Strong',
          transformProps: props => ({
            ...props,
            strong: true
          })
        },
        {
          label: 'Light',
          transformProps: props => ({
            ...props,
            light: true
          })
        },
        {
          label: 'Semi-strong',
          transformProps: props => ({
            ...props,
            semiStrong: true
          })
        }
      ]
    },
    {
      label: 'Description Text Color',
      type: 'radio',
      states: [
        {
          label: 'Neutral tone',
          transformProps: props => props
        },
        {
          label: 'Positive',
          transformProps: props => ({
            ...props,
            positive: true
          })
        },
        {
          label: 'Critical',
          transformProps: props => ({
            ...props,
            critical: true
          })
        },
        {
          label: 'Secondary',
          transformProps: props => ({
            ...props,
            secondary: true
          })
        }
      ]
    }
  ]
};
