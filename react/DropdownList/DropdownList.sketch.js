import React from 'react';
import DropdownList from './DropdownList';
import mapKeys from 'lodash/mapKeys';
import styles from './DropdownList.sketch.less';
import { ListItem, Button } from 'seek-asia-style-guide/react';

export const dropdownList = {
  'value, children': (
    <DropdownList value='Description' className={styles.root}>
      <ListItem value="Children" noShadow />
    </DropdownList>
  ),
  'value, children, no shadow': (
    <DropdownList value='Description' className={styles.root} noShadow>
      <ListItem value="Children" noShadow />
    </DropdownList>
  ),
  'value, children, compact': (
    <DropdownList value='Description' className={styles.root} compact>
      <ListItem value="Children" noShadow compact />
    </DropdownList>
  ),
  'value, nested children': (
    <DropdownList value='Description' className={styles.root}>
      <ListItem value="Children 1" noShadow />
      <Button color="hyperlink" className={styles.button} component="div">
        Children 2
      </Button>
      <DropdownList value="Sub-category" compact lowerLevel noShadow>
        <ListItem value="Children 3" noShadow compact />
      </DropdownList>
    </DropdownList>
  ),
  'value, nested children, long wordings': (
    <DropdownList value='At jobsDB, we believe in an open and inclusive world for all. Here, opportunities and possibilities are plenty: A fresh start. A new career. A welcome change. These are just a few of the things we help people explore.' className={styles.root}>
      <ListItem noShadow value="As a leading job portal with substantial positions across China, Hong Kong, Indonesia, Philippines, Singapore and Thailand, we are Asia’s preferred destination for job seekers. With a team of 1,000 talented individuals, we’ve a strong local presence in every country we’re in." />
      <Button color="hyperlink" className={styles.button} component="div">
        With our understanding and insights on each market, as well our passion for technology, we provide job seekers the best opportunities and deliver exceptional value to employers.
      </Button>
      <DropdownList noShadow value="Sub-category" compact lowerLevel>
        <ListItem compact noShadow value="By really understanding our job seekers and employers, we ensure they find what’s right for them. After all, we’re not just about filling vacancies but fulfilling true potential." />
      </DropdownList>
    </DropdownList>
  ),
  'value, children, chevron center': (
    <DropdownList chevronAlignment='center' value='At jobsDB, we believe in an open and inclusive world for all. Here, opportunities and possibilities are plenty: A fresh start. A new career. A welcome change. These are just a few of the things we help people explore.' className={styles.root}>
      <ListItem noShadow value="Children" />
    </DropdownList>
  )
};

// Export text styles as symbols
// (at least until Sketch libraries support shared text styles)
export const symbols = mapKeys(dropdownList, (value, key) => `DropdownList/${key}`);
