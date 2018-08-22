import React from 'react';
import mapKeys from 'lodash/mapKeys';
import Tag from './Tag';
export const listItem = {
  'Default': <Tag label='This is a Tag' />
};

// Export text styles as symbols
// (at least until Sketch libraries support shared text styles)
export const symbols = mapKeys(listItem, (value, key) => `Tag/${key}`);
