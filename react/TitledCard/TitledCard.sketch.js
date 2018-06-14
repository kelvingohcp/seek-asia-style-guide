import React from 'react';
import mapKeys from 'lodash/mapKeys';
import TitledCard from './TitledCard';
import { Text } from 'seek-asia-style-guide/react';

export const titledCards = {
  'Normal': <TitledCard text='Requirement'><Text>Screaming, Yelling, Shouting</Text></TitledCard>,
  'Transparent': <TitledCard text='Requirement' transparent><Text>Screaming, Yelling, Shouting</Text></TitledCard>
};

export const symbols = mapKeys(titledCards, (value, key) => `Title Card/${key}`);
