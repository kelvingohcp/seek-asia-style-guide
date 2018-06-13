import svgMarkup from './CalendarIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function CalendarIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

CalendarIcon.displayName = 'CalendarIcon';
