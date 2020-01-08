import { Header } from 'seek-asia-style-guide/jobStreet';
import { AUTHENTICATED, UNAUTHENTICATED } from 'seek-asia-style-guide/react/private/authStatusTypes';

const ROUTE = '/jobstreet-header';

export default {
  route: ROUTE,
  tenantPath: 'jobStreet',
  title: 'JobStreet Header',
  component: Header,
  initialProps: {
    language: 'en',
    country: 'my',
    loginAvailable: false,
    authenticationStatus: UNAUTHENTICATED
  },
  options: [{
    label: 'States',
    type: 'checklist',
    states: [
      {
        label: 'Hide Navigation',
        transformProps: props => ({
          ...props,
          hideNavMenu: true
        })
      },
      {
        label: 'Authenticated',
        transformProps: props => ({
          ...props,
          authenticationStatus: AUTHENTICATED,
          userName: 'Olivia'
        })
      }
    ]
  }, {
    label: 'Locale',
    type: 'radio',
    states: [
      {
        label: 'Malaysia (English)',
        transformProps: props => ({
          ...props,
          language: 'en',
          country: 'my'
        })
      },
      {
        label: 'Indonesia (English)',
        transformProps: props => ({
          ...props,
          language: 'en',
          country: 'id'
        })
      },
      {
        label: 'Indonesia (Bahasa)',
        transformProps: props => ({
          ...props,
          language: 'id',
          country: 'id'
        })
      },
      {
        label: 'Singapore (English)',
        transformProps: props => ({
          ...props,
          language: 'en',
          country: 'sg'
        })
      },
      {
        label: 'Phillipines (English)',
        transformProps: props => ({
          ...props,
          language: 'en',
          country: 'ph'
        })
      },
      {
        label: 'Vietnam (Vietnamese)',
        transformProps: props => ({
          ...props,
          language: 'vi',
          country: 'vn'
        })
      }
    ]
  }, {
    label: 'Login Available',
    type: 'radio',
    states: [
      {
        label: 'Login unavailable',
        transformProps: props => ({
          ...props,
          loginAvailable: false
        })
      },
      {
        label: 'Login available',
        transformProps: props => ({
          ...props,
          loginAvailable: true
        })
      }
    ]
  }]
};
