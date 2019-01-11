import React from 'react';
import mapKeys from 'lodash/mapKeys';
import ListItem from './ListItem';
import { Icon } from 'seek-asia-style-guide/react';

const badge = {
  label: 'Badge'
};

export const listItem = {
  'value': <ListItem value='Description' />,
  'value, second level': <ListItem value='Description' secondLevel />,
  'value, hover': <ListItem value='Description' hasHoverState />,
  'value, no shadow': <ListItem value='Description' noShadow />,
  'title, value': <ListItem title='Title' value="Description" />,
  'value, active state': <ListItem value='Description' activeState />,
  'value, second level, checkbox': <ListItem value='Description' checkbox secondLevel />,
  'value, second level, checkbox (checked)': <ListItem value='Description' checkbox checked secondLevel />,
  'title, value, icon': <ListItem title='Qualification' value='Degree' icon={<Icon type="education" />} />,
  'title, value, icon, compact': <ListItem title='Qualification' value='Degree' compact icon={<Icon type="education" />} />,
  'title, value, icon, badge': <ListItem badge={{ ...badge }} icon={<Icon type="education" />} title="Job Posted Date" value="10 May 2018" />,
  'title, value, icon, badge(diff color)': <ListItem badge={{ ...badge, color: 'progressing' }} icon={<Icon type="education" />} title="Job Posted Date" value="10 May 2018" />,
  'title, value, icon, hasHoverState, badge(diff color)': <ListItem badge={{ ...badge, color: 'progressing' }} icon={<Icon type="education" />} title="Job Posted Date" value="10 May 2018" hasHoverState />
};

// Export text styles as symbols
// (at least until Sketch libraries support shared text styles)
export const symbols = mapKeys(listItem, (value, key) => `ListItem/${key}`);
