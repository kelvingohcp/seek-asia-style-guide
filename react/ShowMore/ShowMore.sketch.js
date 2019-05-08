import React from 'react';
import PropTypes from 'prop-types';
import mapKeys from 'lodash/mapKeys';
import ShowMore from '../ShowMore/ShowMore';
import { Card, Section, Text } from 'seek-asia-style-guide/react';

const renderCard = ({ transparent }) => (
  <Card transparent={transparent}><Section><Text>At jobsDB, we believe in an open and inclusive world for all.Here, opportunities and possibilities are plenty: A fresh start. A new career.A welcome change. These are just a few of the things we help people explore.</Text></Section></Card>
);

renderCard.propTypes = {
  transparent: PropTypes.bool
};

export const showMore = {
  '150px': <ShowMore showLessHeight={150}>{renderCard({ transparent: false })}</ShowMore>,
  '50px': <ShowMore showLessHeight={50}>{renderCard({ transparent: false })}</ShowMore>,
  'Color Grey': <ShowMore color="grey" showLessHeight={50}>{renderCard({ transparent: true })}</ShowMore>
};

// Export text styles as symbols
// (at least until Sketch libraries support shared text styles)
export const symbols = mapKeys(showMore, (value, key) => `ShowMore/${key}`);
