import { FilterButton } from 'seek-asia-style-guide/react';
import styles from './FilterButton.less';
import classnames from 'classnames';

export default {
  route: '/filterbutton',
  title: 'FilterButton',
  component: FilterButton,
  initialProps: {
    children: 'Hello world',
    color: 'primary',
    isActive: false
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
            className: classnames(className, styles.ishover)
          })
        },
        {
          label: 'Active',
          transformProps: ({ className, ...props }) => ({
            ...props,
            isActive: true,
            className: classnames(className, styles.isActive)
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
        }
      ]
    }
  ]
};
