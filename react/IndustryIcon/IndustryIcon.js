import svgMarkup from './IndustryIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function IndustryIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

IndustryIcon.displayName = 'IndustryIcon';
