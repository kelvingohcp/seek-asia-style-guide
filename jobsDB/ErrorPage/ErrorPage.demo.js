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
  options: [ ]
};
