import React from 'react';
import ListItem from './ListItem';
import Badge from '../Badge/Badge';
import * as sketch from './ListItem.sketch';
import { HeartIcon, StarIcon } from 'seek-asia-style-guide/react';
export default {
  route: '/listItem',
  title: 'List Item',
  component: ListItem,
  sketch,
  initialProps: {
    value: 'Description'
  },
  options: [
    {
      label: 'Title',
      type: 'radio',
      states: [
        {
          label: 'No Title',
          transformProps: props => props
        },
        {
          label: 'Have Title',
          transformProps: props => ({
            ...props,
            title: 'Job Posted Date',
            value: '10 May 2018'
          })
        }
      ]
    },
    {
      label: 'Icon',
      type: 'radio',
      states: [
        {
          label: 'No Icon',
          transformProps: props => props
        },
        {
          label: 'Heart Icon',
          transformProps: props => ({
            ...props,
            icon: <HeartIcon />
          })
        },
        {
          label: 'Star Icon',
          transformProps: props => ({
            ...props,
            icon: <StarIcon />
          })
        }
      ]
    },
    {
      label: 'with Badge',
      type: 'checklist',
      states: [
        {
          label: 'with Badge',
          transformProps: props => ({
            ...props,
            badge: <Badge label="Badge" color="default" isBold />
          })
        }
      ]
    },
    {
      label: 'Has hover state',
      type: 'checklist',
      states: [
        {
          label: 'Has hover state',
          transformProps: props => ({
            ...props,
            hasHoverState: true
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
    }
  ]
};
