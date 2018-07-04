import React from 'react';
import SplitView from './SplitView';
import { Card, Section, Text } from 'seek-asia-style-guide/react';

const leftCards = number => {
  const cards = [];
  for (let i = 0; i < number; i++) {
    cards.push(
      <Card>
        <Section>
          <Text shouting>Left Content</Text>
          <Text>
            This content is provided by the first child. It will take the whole
            container on mobile and tablet.It has 2 different sizes on desktop
            and large screen.
          </Text>
        </Section>
      </Card>
    );
  }
  return <div key="leftCards">{cards}</div>;
};

const rightCards = number => {
  const cards = [];
  for (let i = 0; i < number; i++) {
    cards.push(
      <Card>
        <Section>
          <Text shouting>Right Content</Text>
          <Text>
            This content is provided by the second child. It will not show on
            mobile or tablet.
          </Text>
        </Section>
      </Card>
    );
  }
  return <div key="rightCards">{cards}</div>;
};

export default {
  route: '/split-view',
  title: 'Split View',
  component: SplitView,
  initialProps: {
    children: [leftCards(3), rightCards(5)]
  },
  options: [
    {
      label: 'Height',
      type: 'radio',
      states: [
        {
          label: 'No height',
          transformProps: props => ({
            ...props
          })
        },
        {
          label: '300px',
          transformProps: props => ({
            ...props,
            height: 300
          })
        },
        {
          label: '500px',
          transformProps: props => ({
            ...props,
            height: 500
          })
        }
      ]
    }
  ]
};
