import svgMarkup from './CareerLevelIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function CareerLevelIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

CareerLevelIcon.displayName = 'CareerLevelIcon';
