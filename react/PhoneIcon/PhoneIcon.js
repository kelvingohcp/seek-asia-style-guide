import svgMarkup from './PhoneIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function PhoneIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

PhoneIcon.displayName = 'PhoneIcon';
