import svgMarkup from './DressCodeIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function DressCodeIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

DressCodeIcon.displayName = 'DressCodeIcon';
