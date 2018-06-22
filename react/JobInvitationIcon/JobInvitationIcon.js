import svgMarkup from './JobInvitationIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function JobInvitationIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

JobInvitationIcon.displayName = 'JobInvitationIcon';
