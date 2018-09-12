import Loader from './Loader';

export default {
  route: '/loader',
  title: 'Loader',
  component: Loader,
  initialProps: {},
  options: [{
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
  }]
};
