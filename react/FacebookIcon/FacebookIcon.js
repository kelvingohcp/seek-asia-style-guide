import svgMarkup from './FacebookIcon.svg';
import svgMarkupFilled from './FacebookIconFilled.svg';
import svgMarkupSquare from './FacebookIconSquare.svg';

import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../private/Icon/Icon';

export default function FacebookIcon({ filled, square, ...props }) {
  const markup = filled ? svgMarkupFilled : svgMarkup;

  return <Icon markup={square ? svgMarkupSquare : markup} {...props} />;
}

FacebookIcon.displayName = 'FacebookIcon';

FacebookIcon.propTypes = {
  filled: PropTypes.bool,
  square: PropTypes.bool
};

FacebookIcon.defaultProps = {
  filled: false,
  square: false
};
