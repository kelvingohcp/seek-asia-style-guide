import Footer from './Footer';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as sketch from './Footer.sketch';

export const makeDummyLinkRendererForPath = path => {
  const DummyLinkRenderer = ({ href, children, ...props }) => (
    <Link style={{ textDecoration: 'none' }} to={`${path}#actualHref=${href}`} {...props}>
      {children}
    </Link>
  );

  DummyLinkRenderer.propTypes = {
    children: PropTypes.array,
    href: PropTypes.string
  };

  return DummyLinkRenderer;
};

const ROUTE = '/jobsdb-footer';

export default {
  route: ROUTE,
  tenantPath: 'jobsDB',
  title: 'JobsDB Footer',
  component: Footer,
  sketch,
  initialProps: {
    language: 'en',
    country: 'hk',
    linkRenderer: makeDummyLinkRendererForPath(ROUTE)
  },
  options: [
    {
      label: 'Language',
      type: 'radio',
      states: [
        {
          label: 'English',
          transformProps: props => ({
            ...props,
            language: 'en'
          })
        },
        {
          label: 'Bahasa',
          transformProps: props => ({
            ...props,
            language: 'id'
          })
        },
        {
          label: 'Thai',
          transformProps: props => ({
            ...props,
            language: 'th'
          })
        }
      ]
    },
    {
      label: 'Country',
      type: 'radio',
      states: [
        {
          label: 'Hong Kong',
          transformProps: props => ({
            ...props,
            country: 'hk'
          })
        },
        {
          label: 'Singapore',
          transformProps: props => ({
            ...props,
            country: 'sg'
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
          label: 'Thailand',
          transformProps: props => ({
            ...props,
            country: 'th'
          })
        }
      ]
    }
  ]
};
