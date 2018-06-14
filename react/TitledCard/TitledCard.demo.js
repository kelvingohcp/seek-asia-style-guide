import React from 'react';
import PropTypes from 'prop-types';
import { TitledCard, Text, PageBlock, Section } from 'seek-asia-style-guide/react';
import * as sketch from './TitledCard.sketch';

const TitledCardContainer = ({ component: DemoComponent, componentProps }) => (
  <PageBlock>
    <Section>
      <DemoComponent {...componentProps} />
    </Section>
  </PageBlock>
);
TitledCardContainer.propTypes = {
  component: PropTypes.any,
  componentProps: PropTypes.object.isRequired
};

export default {
  route: '/TitledCard',
  title: 'Titled Card',
  component: TitledCard,
  container: TitledCardContainer,
  sketch,
  block: true,
  initialProps: {
    children: (
      <Text>This is some text inside a card.</Text>
    ),
    text: 'Title'
  },
  options: [
    {
      label: 'States',
      type: 'checkbox',
      states: [
        {
          label: 'Transparent',
          transformProps: props => ({
            ...props,
            transparent: true
          })
        }
      ]
    }
  ]
};
