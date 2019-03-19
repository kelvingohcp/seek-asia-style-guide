import Logo from './Logo';

export default {
  route: '/jobstreet-logo',
  tenantPath: 'jobStreet',
  title: 'JobStreet Logo',
  component: Logo,
  initialProps: {
    country: 'my'
  },
  options: [
    {
      label: 'Country',
      type: 'radio',
      states: [
        {
          label: 'Malaysia',
          transformProps: props => ({
            ...props
          })
        },
        {
          label: 'Indonesia',
          transformProps: props => ({
            ...props,
            country: 'id'
          })
        },
        {
          label: 'Philippines',
          transformProps: props => ({
            ...props,
            country: 'ph'
          })
        },
        {
          label: 'Singapore',
          transformProps: props => ({
            ...props,
            country: 'sg'
          })
        }
      ]
    }
  ]
};
