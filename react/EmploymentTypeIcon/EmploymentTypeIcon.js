import svgMarkup from './EmploymentTypeIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function EmploymentTypeIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

EmploymentTypeIcon.displayName = 'EmploymentTypeIcon';
