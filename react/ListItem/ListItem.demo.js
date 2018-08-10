import React from 'react';
import ListItem from './ListItem';
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
            icon: (
              <HeartIcon />
            )
          })
        },
        {
          label: 'Star Icon',
          transformProps: props => ({
            ...props,
            icon: (
              <StarIcon />
            )
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
            badge: {
              label: 'Badge'
            }
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
      label: 'Second Level',
      type: 'checklist',
      states: [
        {
          label: 'second level',
          transformProps: props => ({
            ...props,
            secondLevel: true
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
            descriptionProps: { ...props.descriptionProps, strong: true }
          })
        },
        {
          label: 'Light',
          transformProps: props => ({
            ...props,
            descriptionProps: { ...props.descriptionProps, light: true }
          })
        },
        {
          label: 'Semi-strong',
          transformProps: props => ({
            ...props,
            descriptionProps: { ...props.descriptionProps, semiStrong: true }
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
            descriptionProps: { ...props.descriptionProps, positive: true }
          })
        },
        {
          label: 'Critical',
          transformProps: props => ({
            ...props,
            descriptionProps: { ...props.descriptionProps, critical: true }
          })
        },
        {
          label: 'Secondary',
          transformProps: props => ({
            ...props,
            descriptionProps: { ...props.descriptionProps, secondary: true }
          })
        }
      ]
    }
  ]
};