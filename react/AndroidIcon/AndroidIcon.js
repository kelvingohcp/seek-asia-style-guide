import svgMarkup from './AndroidIcon.svg';
import React from 'react';

import Icon from '../private/Icon/Icon';

export default function AndroidIcon({ ...props }) {
  return <Icon markup={svgMarkup} {...props} />;
}

AndroidIcon.displayName = 'AndroidIcon';
