import React from 'react';
import mapKeys from 'lodash/mapKeys';
import Badge from './Badge';
export const listItem = {
  'Subtle Default': <Badge label="Default" color="default" />,
  'Subtle Progressing': <Badge label="Progressing" color="progressing" />,
  'Subtle Declined': <Badge label="Declined" color="declined" />,
  'Subtle Expired': <Badge label="Expired" color="expired" />,
  'Subtle New': <Badge label="New" color="new" />,
  'Bold Default': <Badge label="Default" color="default" isBold />,
  'Bold Progressing': <Badge label="Progressing" color="progressing" isBold />,
  'Bold Declined': <Badge label="Declined" color="declined" isBold />,
  'Bold Expired': <Badge label="Expired" color="expired" isBold />,
  'Bold New': <Badge label="New" color="new" isBold />
};

// Export text styles as symbols
// (at least until Sketch libraries support shared text styles)
export const symbols = mapKeys(listItem, (value, key) => `Badge/${key}`);
