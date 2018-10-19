import React from 'react';
import PropTypes from 'prop-types';
import { BookmarkButton } from 'seek-asia-style-guide/react';
import * as sketch from './BookmarkButton.sketch';

const Container = ({ component: DemoComponent, componentProps }) => (
  <DemoComponent {...componentProps} />
);

Container.propTypes = {
  component: PropTypes.any,
  componentProps: PropTypes.object.isRequired
};

export default {
  route: '/bookmark-button',
  title: 'BookmarkButton',
  category: 'Components',
  component: BookmarkButton,
  container: Container,
  sketch,
  initialProps: {
    isBookmarked: false,
    onBookmarkClick: () => {}
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Bookmarked',
          transformProps: ({ ...props }) => ({
            ...props,
            isBookmarked: true
          })
        }
      ]
    }
  ]
};
