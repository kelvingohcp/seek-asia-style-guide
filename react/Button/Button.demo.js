import { Button } from 'seek-asia-style-guide/react';
import * as sketch from './Button.sketch';

export default {
  route: '/button',
  title: 'Button',
  component: Button,
  sketch,
  initialProps: {
    children: 'Hello world',
    color: 'primary'
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'isSelected',
          transformProps: ({ className, ...props }) => ({
            ...props,
            isSelected: true
          })
        },
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
            disabled: true
          })
        }
      ]
    },
    {
      label: 'Component',
      type: 'radio',
      states: [
        {
          label: 'As Button',
          transformProps: props => ({
            ...props,
            component: 'button'
          })
        },
        {
          label: 'As Link',
          transformProps: props => ({
            ...props,
            component: 'a',
            href: '#'
          })
        },
        {
          label: 'As Div',
          transformProps: props => ({
            ...props,
            component: 'div'
          })
        }
      ]
    },
    {
      label: 'Colour',
      type: 'radio',
      states: [
        {
          label: 'Primary',
          transformProps: props => ({
            ...props,
            color: 'primary'
          })
        },
        {
          label: 'Secondary',
          transformProps: props => ({
            ...props,
            color: 'secondary'
          })
        },
        {
          label: 'Call To Action',
          transformProps: props => ({
            ...props,
            color: 'callToAction'
          })
        },
        {
          label: 'Tertiary',
          transformProps: props => ({
            ...props,
            color: 'tertiary'
          })
        },
        {
          label: 'Hyperlink',
          transformProps: props => ({
            ...props,
            color: 'hyperlink'
          })
        },
        {
          label: 'Ghost white',
          transformProps: props => ({
            ...props,
            color: 'ghostWhite'
          })
        }
      ]
    }
  ]
};
