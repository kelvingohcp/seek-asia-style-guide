import React from 'react';
import mapKeys from 'lodash/mapKeys';
import ListItem from './ListItem';

export const listItem = {
  'testing': <ListItem />,
  
};

// Export text styles as symbols
// (at least until Sketch libraries support shared text styles)
export const symbols = mapKeys(listItem, (value, key) => `ListItem/${key}`);
