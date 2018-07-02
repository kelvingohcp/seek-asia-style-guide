import React from 'react';
import SplitView from './SplitView';
import { Card, Section, Text } from 'seek-asia-style-guide/react';

export default {
  route: '/split-view',
  title: 'Split View',
  component: SplitView,
  initialProps: {
    children: [
      <Card key="1">
        <Section>
          <Text shouting>Left Content</Text>
          <Text>
            This content is provided by the first child. It will take the whole
            container on mobile and tablet.It has 2 different sizes on desktop
            and large screen.
          </Text>
        </Section>
      </Card>,
      <Card key="2">
        <Section>
          <Text shouting>Right Content</Text>
          <Text>
            This content is provided by the second child. It will not show on
            mobile or tablet. 
          </Text>
        </Section>
      </Card>
    ]
  },
  options: []
};
