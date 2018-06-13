import svgMarkup from './FieldOfStudyIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function FieldOfStudyIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

FieldOfStudyIcon.displayName = 'FieldOfStudyIcon';
