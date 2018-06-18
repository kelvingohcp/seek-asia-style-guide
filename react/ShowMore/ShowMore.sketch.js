import React from 'react';
import mapKeys from 'lodash/mapKeys';
import ShowMore from '../ShowMore/ShowMore';
import { Card, Section, Text } from 'seek-asia-style-guide/react';

const card = <Card><Section><Text>At jobsDB, we believe in an open and inclusive world for all.Here, opportunities and possibilities are plenty: A fresh start. A new career.A welcome change. These are just a few of the things we help people explore.</Text></Section></Card>;
export const showMore = {
  '150px': <ShowMore showLessHeight='150'>{card}</ShowMore>,
  '50px': <ShowMore showLessHeight='50'>{card}</ShowMore>
};

// Export text styles as symbols
// (at least until Sketch libraries support shared text styles)
export const symbols = mapKeys(showMore, (value, key) => `ShowMore/${key}`);
