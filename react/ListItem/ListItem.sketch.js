import React from 'react';
import mapKeys from 'lodash/mapKeys';
import ListItem from './ListItem';
import { IconEducation } from 'seek-asia-style-guide/react';
export const listItem = {

  'Value':<ListItem value='Description'/>,
  'Value with title':<ListItem value='Title'/>,
  'Job Requirements/Qualifaction': <ListItem title='Qualification' value='Degree' icon={<IconEducation/>}/>,
  
};

// Export text styles as symbols
// (at least until Sketch libraries support shared text styles)
export const symbols = mapKeys(listItem, (value, key) => `ListItem/${key}`);
