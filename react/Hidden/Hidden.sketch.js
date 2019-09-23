import React from 'react';
import mapKeys from 'lodash/mapKeys';
import Hidden from './Hidden';
import Text from '../Text/Text';

export const listItem = {
  'Desktop': <Text loud>🖥 icon will be hidden on desktop => <Hidden desktop>🖥</Hidden></Text>,
  'Mobile': <Text loud>📱 icon will be hidden on mobile => <Hidden mobile>📱</Hidden></Text>,
  'Above Mobile': <Text loud>📱 icon will be hidden above mobile breakpoint => <Hidden aboveMobile>📱</Hidden></Text>,
  'Print': <Text loud>🖨 icon will be hidden when print => <Hidden print>🖨</Hidden></Text>,
  'Screen': <Text loud>📺 icon will be hidden for screen => <Hidden screen>📺</Hidden></Text>
};

// Export text styles as symbols
// (at least until Sketch libraries support shared text styles)
export const symbols = mapKeys(listItem, (value, key) => `Hidden/${key}`);
