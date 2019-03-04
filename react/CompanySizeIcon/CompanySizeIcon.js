import svgMarkup from './CompanySizeIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function CompanySizeIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

CompanySizeIcon.displayName = 'CompanySizeIcon';
