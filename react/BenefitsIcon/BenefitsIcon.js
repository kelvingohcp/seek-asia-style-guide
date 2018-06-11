import svgMarkup from './BenefitsIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function BenefitsIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

BenefitsIcon.displayName = 'BenefitsIcon';
