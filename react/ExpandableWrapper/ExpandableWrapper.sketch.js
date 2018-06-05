import React from 'react';
import mapKeys from 'lodash/mapKeys';
import ExpandableWrapper from '../ExpandableWrapper/ExpandableWrapper';

export const expandableWrapper = {
  Value: <ExpandableWrapper component={<div>hi</div>} />
};

// Export text styles as symbols
// (at least until Sketch libraries support shared text styles)
export const symbols = mapKeys(expandableWrapper, (value, key) => `ExpandableWrapper/${key}`);
