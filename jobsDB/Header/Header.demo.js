import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'seek-asia-style-guide/jobsDB';
import { Link } from 'react-router-dom';
import { AUTHENTICATED, UNAUTHENTICATED } from 'seek-asia-style-guide/react/private/authStatusTypes';

export const makeDummyLinkRendererForPath = path => {
  const DummyLinkRenderer = ({ href, ...props }) => (
    <Link to={`${path}#actualHref=${href}`} {...props} />
  );

  DummyLinkRenderer.propTypes = {
    href: PropTypes.string
  };

  return DummyLinkRenderer;
};
const ROUTE = '/jobsdb-header';
const domain = 'jobsdb.com';

export default {
  route: ROUTE,
  tenantPath: 'jobsDB',
  title: 'JobsDB Header',
  component: Header,
  initialProps: {
    language: 'en',
    country: 'hk',
    loginAvailable: true,
    domainUrl: domain,
    linkRenderer: makeDummyLinkRendererForPath(ROUTE),
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
      }
    ]
  }, {
    label: 'Locale',
    type: 'radio',
    states: [
      {
        label: 'Hong Kong (English)',
        transformProps: props => ({
          ...props,
          language: 'en',
          country: 'hk',
          baseUrl: `https://hk.${domain}`
        })
      },
      {
        label: 'Indonesia (English)',
        transformProps: props => ({
          ...props,
          language: 'en',
          country: 'id',
          baseUrl: `https://id.${domain}`
        })
      },
      {
        label: 'Indonesia (Bahasa)',
        transformProps: props => ({
          ...props,
          language: 'id',
          country: 'id',
          baseUrl: `https://id.${domain}`
        })
      },
      {
        label: 'Singapore (English)',
        transformProps: props => ({
          ...props,
          language: 'en',
          country: 'sg',
          baseUrl: `https://sg.${domain}`
        })
      },
      {
        label: 'Thailand (English)',
        transformProps: props => ({
          ...props,
          language: 'en',
          country: 'th',
          baseUrl: `https://th.${domain}`
        })
      },
      {
        label: 'Thailand (Thai)',
        transformProps: props => ({
          ...props,
          language: 'th',
          country: 'th',
          baseUrl: `https://th.${domain}`
        })
      }
    ]
  }, {
    label: 'Login Available',
    type: 'radio',
    states: [
      {
        label: 'Login available',
        transformProps: props => ({
          ...props,
          loginAvailable: true
        })
      },
      {
        label: 'Login unavailable',
        transformProps: props => ({
          ...props,
          loginAvailable: false
        })
      }
    ]
  }, {
    label: 'Logged In',
    type: 'radio',
    states: [
      {
        label: 'UnAuthenticated',
        transformProps: props => ({
          ...props,
          authenticationStatus: UNAUTHENTICATED,
          loginAvailable: true
        })
      },
      {
        label: 'Authenticated',
        transformProps: props => ({
          ...props,
          authenticationStatus: AUTHENTICATED,
          loginAvailable: true,
          userName: 'Olivia'
        })
      },
      {
        label: 'Pending',
        transformProps: props => ({
          ...props,
          returnUrl: '/jobs',
          loginAvailable: false
        })
      }
    ]
  }]
};
