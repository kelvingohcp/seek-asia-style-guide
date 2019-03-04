import svgMarkup from './AppleIcon.svg';
import React from 'react';

import Icon from '../private/Icon/Icon';

export default function AppleIcon({ ...props }) {
  return <Icon markup={svgMarkup} {...props} />;
}

AppleIcon.displayName = 'AppleIcon';
