import svgMarkup from './LanguageIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function LanguageIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

LanguageIcon.displayName = 'LanguageIcon';
