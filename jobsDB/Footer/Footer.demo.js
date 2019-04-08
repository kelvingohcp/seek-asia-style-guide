import Footer from './Footer';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as sketch from './Footer.sketch';
import { ListItem } from 'seek-asia-style-guide/react';

export const makeDummyLinkRendererForPath = path => {
  const DummyLinkRenderer = ({ href, children, ...props }) => (
    <Link style={{ textDecoration: 'none' }} to={`${path}#actualHref=${href}`} {...props}>
      {React.Children.map(children, child => {
        if (child.type === ListItem) {
          return React.cloneElement(child, { noShadow: true });
        }
        return child;
      })}
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
    },
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'isExpandedVersion',
          transformProps: props => ({
            ...props,
            isExpandedVersion: true
          })
        }
      ]
    },
    {
      label: 'Hide Country Language',
      type: 'checklist',
      states: [
        {
          label: 'Hide Country Language',
          transformProps: props => ({
            ...props,
            showCountryLanguage: false
          })
        }
      ]
    },
    {
      label: 'Remove header action tray offset',
      type: 'checklist',
      states: [
        {
          label: 'Hide mobile action tray offset',
          transformProps: props => ({
            ...props,
            showHeaderActionTrayOffset: false
          })
        }
      ]
    }
  ]
};
