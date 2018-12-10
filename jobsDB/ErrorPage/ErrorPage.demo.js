import React from 'react';
import ErrorPage from './ErrorPage';
import PropTypes from 'prop-types';
import { PageBlock } from 'seek-asia-style-guide/react';

const ErrorPageContainer = ({ componentProps }) => {
  return (
    <PageBlock style={'width: 100%;'}>
      <ErrorPage {...componentProps} />
    </PageBlock>
  );
};

ErrorPageContainer.propTypes = {
  component: PropTypes.func,
  componentProps: PropTypes.object
};

export default {
  route: '/jobsdb-errorpage',
  title: 'JobsDB Error Page',
  component: ErrorPage,
  initialProps: {},
  options: [
    {
      label: 'texts',
      type: 'radio',
      states: [
        {
          label: 'empty',
          transformProps: props => ({
            ...props
          })
        },
        {
          label: 'custom Headline only',
          transformProps: props => ({
            ...props,
            texts: {
              headline: 'This job ad is currently unavailable'
            }
          })
        },
        {
          label: 'custom Subline only',
          transformProps: props => ({
            ...props,
            texts: {
              subline: 'This job ad is currently unavailable'
            }
          })
        },
        {
          label: 'Retry Error Message',
          transformProps: props => ({
            ...props,
            texts: {
              headline: 'Hmm... we can\'t seem to load the screen',
              subline: 'Keep calm and retry first'
            }
          })
        },
        {
          label: 'Job Detail Error Message',
          transformProps: props => ({
            ...props,
            texts: {
              headline: 'This job ad is currently unavailable',
              subline: 'Keep calm and search again'
            }
          })
        }
      ]
    },
    {
      label: 'buttonText',
      type: 'radio',
      states: [
        {
          label: 'Default button',
          transformProps: props => ({
            ...props
          })
        },
        {
          label: 'custom text button',
          transformProps: props => ({
            ...props,
            button: {
              text: 'Search again'
            }
          })
        },
        {
          label: 'custom onClick button',
          transformProps: props => ({
            ...props,
            button: {
              onClick: () => {
                alert('hi'); // eslint-disable-line no-alert
              }
            }
          })
        },
        {
          label: 'custom onClick and text button',
          transformProps: props => ({
            ...props,
            button: {
              text: 'Search again',
              onClick: () => {
                alert('hi'); // eslint-disable-line no-alert
              }
            }
          })
        }
      ]
    }
  ]
};
