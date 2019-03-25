import React from 'react';
import { Button, Icon } from 'seek-asia-style-guide/react';
import * as sketch from './Button.sketch';
import styles from './Button.less';
import classnames from 'classnames';

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
          label: 'Hover',
          transformProps: ({ className, ...props }) => ({
            ...props,
            className: classnames(className, styles.rootHover)
          })
        },
        {
          label: 'Active',
          transformProps: ({ className, ...props }) => ({
            ...props,
            className: classnames(className, styles.rootActive)
          })
        },
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
            color: 'callToAction',
            isJobStreet: true
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
          label: 'Medical',
          transformProps: props => ({
            ...props,
            children: (
              <span>
                <Icon type="medical" animation="popIn" lineHeight="waving" />
                &nbsp;Click here
              </span>
            )
          })
        },
        {
          label: 'Past Application',
          transformProps: props => ({
            ...props,
            children: (
              <span>
                <Icon type="pastApplication" animation="popIn" lineHeight="waving" />
                &nbsp;Click here
              </span>
            )
          })
        }
      ]
    }
  ]
};
