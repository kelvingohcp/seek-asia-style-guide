import React from 'react';
import mapKeys from 'lodash/mapKeys';
import ListItem from './ListItem';
import { IconEducation } from 'seek-asia-style-guide/react';

const badge = {
  label: 'Badge'
};

export const listItem = {

  'value': <ListItem value='Description' />,
  'value, hover': <ListItem value='Description' hasHoverState />,
  'value, no shadow': <ListItem value='Description' noShadow />,
  'title, value': <ListItem title='Title' value="Description" />,
  'title, value, icon': <ListItem title='Qualification' value='Degree' icon={<IconEducation />} />,
  'title, value, icon, compact': <ListItem title='Qualification' value='Degree' compact icon={<IconEducation />} />,
  'title, value, icon, badge': <ListItem badge={{ ...badge }} icon={<IconEducation />} title="Job Posted Date" value="10 May 2018" />,
  'title, value, icon, badge(diff color)': <ListItem badge={{ ...badge, color: 'progressing' }} icon={<IconEducation />} title="Job Posted Date" value="10 May 2018" />,
  'title, value, icon, hasHoverState, badge(diff color)': <ListItem badge={{ ...badge, color: 'progressing' }} icon={<IconEducation />} title="Job Posted Date" value="10 May 2018" hasHoverState />
};

// Export text styles as symbols
// (at least until Sketch libraries support shared text styles)
export const symbols = mapKeys(listItem, (value, key) => `ListItem/${key}`);
