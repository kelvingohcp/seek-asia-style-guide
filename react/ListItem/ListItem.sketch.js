import React from 'react';
import mapKeys from 'lodash/mapKeys';
import ListItem from './ListItem';
import { IconEducation } from 'seek-asia-style-guide/react';
import Badge from '../Badge/Badge';

export const listItem = {

  'Value': <ListItem value='Description' />,
  'title, value': <ListItem title='Title' value="Description" />,
  'title, value, icon': <ListItem title='Qualification' value='Degree' icon={<IconEducation />} />,
  'title, value, icon, badge': <ListItem badge={<Badge color="default" isBold label="Badge" />} icon={<IconEducation />} title="Job Posted Date" value="10 May 2018" />,
  'title, value, icon, badge(diff color)': <ListItem badge={<Badge color="progressing" isBold label="Badge" />} icon={<IconEducation />} title="Job Posted Date" value="10 May 2018" />
};

// Export text styles as symbols
// (at least until Sketch libraries support shared text styles)
export const symbols = mapKeys(listItem, (value, key) => `ListItem/${key}`);
