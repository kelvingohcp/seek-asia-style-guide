import svgMarkup from './SkillsIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function SkillsIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

SkillsIcon.displayName = 'SkillsIcon';
