import svgMarkup from './CalenderIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function CalenderIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

CalenderIcon.displayName = 'CalenderIcon';
