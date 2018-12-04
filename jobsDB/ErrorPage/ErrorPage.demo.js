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
      label: 'onClick',
      type: 'checklist',
      states: [
        {
          label: 'onClick',
          transformProps: props => ({
            ...props,
            onClick: () => {
              alert('hi'); // eslint-disable-line no-alert
            }
          })
        }
      ]
    },
    {
      label: 'customeText',
      type: 'radio',
      states: [
        {
          label: 'Default Headline and Subline',
          transformProps: props => ({
            ...props
          })
        },
        {
          label: 'Custome Headline only',
          transformProps: props => ({
            ...props,
            customeText: {
              headline: 'This job ad is currently unavailable'
            }
          })
        },
        {
          label: 'Custome Subline only',
          transformProps: props => ({
            ...props,
            customeText: {
              subline: 'This job ad is currently unavailable'
            }
          })
        },
        {
          label: 'Custome Headline and Subline',
          transformProps: props => ({
            ...props,
            customeText: {
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
          label: 'Default button text',
          transformProps: props => ({
            ...props
          })
        },
        {
          label: 'Custome button text',
          transformProps: props => ({
            ...props,
            buttonText: 'Search again'
          })
        }
      ]
    }
  ]
};
