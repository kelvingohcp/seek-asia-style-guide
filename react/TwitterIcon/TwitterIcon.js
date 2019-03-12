import svgMarkup from './TwitterIcon.svg';
import svgMarkupGeneric from './TwitterIconGeneric.svg';
import svgMarkupFilled from './TwitterIconFilled.svg';

import PropTypes from 'prop-types';
import React from 'react';

import Icon from '../private/Icon/Icon';

export default function TwitterIcon({ filled, generic, ...props }) {
  let markup = svgMarkup;
  if (filled) {
    markup = svgMarkupFilled;
  } else if (generic) {
    markup = svgMarkupGeneric;
  }
  return <Icon markup={markup} {...props} />;
}

TwitterIcon.displayName = 'TwitterIcon';

TwitterIcon.propTypes = {
  filled: PropTypes.bool,
  generic: PropTypes.bool
};

TwitterIcon.defaultProps = {
  filled: false,
  generic: false
};
