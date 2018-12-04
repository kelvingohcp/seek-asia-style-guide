import React from 'react';
import { Button, HeartIcon, StarIcon, Icon } from 'seek-asia-style-guide/react';
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
    color: 'callToAction'
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
          label: 'Call To Action if no tenant on env variable or prop',
          transformProps: props => ({
            ...props,
            color: 'callToAction'
          })
        },
        {
          label: 'Call To Action(JobStreet)',
          transformProps: props => ({
            ...props,
            color: 'callToAction',
            isJobStreet: true
          })
        },
        {
          label: 'Call To Action(JobsDB)',
          transformProps: props => ({
            ...props,
            color: 'callToAction',
            isJobsDB: true
          })
        },
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
          label: 'Hyperlink',
          transformProps: props => ({
            ...props,
            color: 'hyperlink'
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
          label: 'Tertiary - DB Hirer',
          transformProps: props => ({
            ...props,
            color: 'tertiary',
            isJobsDB: true
          })
        },
        {
          label: 'Tertiary - JS Hirer (SiVA)',
          transformProps: props => ({
            ...props,
            color: 'tertiary',
            isJobStreet: true
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
            children: (
              <span>
                <HeartIcon filled={true} />
                &nbsp;Click here
              </span>
            )
          })
        },
        {
          label: 'Star Icon',
          transformProps: props => ({
            ...props,
            children: (
              <span>
                <StarIcon filled={true} />
                &nbsp;Click here
              </span>
            )
          })
        },
        {
          label: 'Medical',
          transformProps: props => ({
            ...props,
            children: (
              <span>
                <Icon type="medical" size="small" animation="popIn" lineHeight="waving" />
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
                <Icon type="pastApplication" size="small" animation="popIn" lineHeight="waving" />
                &nbsp;Click here
              </span>
            )
          })
        }
      ]
    }
  ]
};
