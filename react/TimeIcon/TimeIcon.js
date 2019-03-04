import svgMarkup from './TimeIcon.svg';
import svgMarkupRecent from './RecentTimeIcon.svg';
import svgMarkupRecentFilled from './RecentTimeFilledIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';
import PropTypes from 'prop-types';

export default function TimeIcon({ recent, filled, ...props }) {
  const markup = recent ? svgMarkupRecent : svgMarkup;

  return <Icon markup={filled ? svgMarkupRecentFilled : markup} {...props} />;
}

TimeIcon.displayName = 'TimeIcon';

TimeIcon.propTypes = {
  filled: PropTypes.bool,
  recent: PropTypes.bool
};

TimeIcon.defaultProps = {
  filled: false,
  recent: false
};
