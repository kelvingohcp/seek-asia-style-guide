import React from 'react';
import DropdownList from './DropdownList';
import mapKeys from 'lodash/mapKeys';
import styles from './DropdownList.sketch.less';
import { ListItem, Button } from 'seek-asia-style-guide/react';

export const dropdownList = {
  'value, children':
  <DropdownList value='Description' className={styles.root}>
    <ListItem value="Children" noShadow />
  </DropdownList>,
  'value, children, no shadow':
  <DropdownList value='Description' className={styles.root} noShadow>
    <ListItem value="Children" noShadow />
  </DropdownList>,
  'value, nested children':
  <DropdownList value='Description' className={styles.root}>
    <ListItem value="Children 1" noShadow />
    <Button color="hyperlink">
      Children 2
    </Button>
    <DropdownList value="Sub-category" noShadow waving>
      <ListItem value="Children 3" noShadow compact />
    </DropdownList>
  </DropdownList>
};

// Export text styles as symbols
// (at least until Sketch libraries support shared text styles)
export const symbols = mapKeys(dropdownList, (value, key) => `DropdownList/${key}`);
