import React from 'react';
import mapKeys from 'lodash/mapKeys';
import ShowMore from '../ShowMore/ShowMore';
import { Card, Section, Text } from 'seek-asia-style-guide/react';

const content = <Card><Section><Text>At jobsDB, we believe in an open and inclusive world for all.Here, opportunities and possibilities are plenty: A fresh start. A new career.A welcome change. These are just a few of the things we help people explore.</Text></Section></Card>;

export const showMore = {
  'Show in mobile device only': <ShowMore id='Sketch100' showLessHeight='150' component={content} />,
  'Show in all devices': <ShowMore id='Sketch101' showLessHeight='50' component={content} />
};

// Export text styles as symbols
// (at least until Sketch libraries support shared text styles)
export const symbols = mapKeys(showMore, (value, key) => `ShowMore/${key}`);
