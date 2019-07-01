import { FilterButton } from 'seek-asia-style-guide/react';

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
