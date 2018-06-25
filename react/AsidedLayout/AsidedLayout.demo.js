import React from 'react';
import PropTypes from 'prop-types';
import { AsidedLayout, PageBlock, Card, Section, Text } from 'seek-asia-style-guide/react';

const AsidedLayoutContainer = ({ component: DemoComponent, componentProps }) => (
  <PageBlock>
    <DemoComponent {...componentProps} />
  </PageBlock>
);
AsidedLayoutContainer.propTypes = {
  component: PropTypes.any,
  componentProps: PropTypes.object.isRequired
};

export default {
  route: '/asided-layout',
  title: 'Asided Layout',
  component: AsidedLayout,
  container: AsidedLayoutContainer,
  seekComponent: true,
  block: true,
  initialProps: {
    size: '30%',
    renderAside: () => (
      <Card transparent>
        <Section>
          <Text shouting>Aside</Text>
          <Text>This card is provided via the 'renderAside' prop.</Text>
        </Section>
      </Card>
    ),
    children: [
      <Card key="1">
        <Section>
          <Text shouting>Main Content</Text>
          <Text>This card is provided as children.</Text>
        </Section>
      </Card>,
      <Card key="2">
        <Section>
          <Text shouting>Another Card</Text>
          <Text>Here's another card for good measure.</Text>
        </Section>
      </Card>
    ]
  },
  options: [
    {
      label: 'Order',
      type: 'checkbox',
      states: [
        {
          label: 'Reverse on mobile',
          transformProps: props => ({
            ...props,
            reverse: true
          })
        }
      ]
    },
    {
      label: 'Disable Aside',
      type: 'checkbox',
      states: [
        {
          label: 'Disable Aside on mobile',
          transformProps: props => ({
            ...props,
            disableOnMobile: true
          })
        }
      ]
    },
    {
      label: 'Disable Gap',
      type: 'checkbox',
      states: [
        {
          label: 'Disable Gap In Between',
          transformProps: props => ({
            ...props,
            disableGapInBetween: true
          })
        }
      ]
    },
    {
      label: 'Size',
      type: 'radio',
      states: [
        {
          label: '30%',
          transformProps: props => ({
            ...props,
            size: '30%'
          })
        },
        {
          label: '40%',
          transformProps: props => ({
            ...props,
            size: '40%'
          })
        },
        {
          label: '200px',
          transformProps: props => ({
            ...props,
            size: '200px'
          })
        }
      ]
    }
  ]
};
