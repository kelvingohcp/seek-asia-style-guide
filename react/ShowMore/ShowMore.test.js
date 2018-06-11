import React from 'react';
import renderer from 'react-test-renderer';
import ShowMore from './ShowMore';
import { Card, Section, Text } from 'seek-asia-style-guide/react';

const card = (
  <Card>
    <Section>
      <Text>
        At jobsDB, we believe in an open and inclusive world for all.Here,
        opportunities and possibilities are plenty: A fresh start. A new
        career.A welcome change. These are just a few of the things we help
        people explore.
      </Text>
    </Section>
  </Card>
);

function createNodeMock() {
  return card;
}

describe('ShowMore:', () => {
  it('should render value', () => {
    const options = { createNodeMock };
    const wrapper = renderer.create(
      <ShowMore
        showLessHeight='150'
        lblShowMore='Show more'
        lblShowLess='Show less'>
        {card}
      </ShowMore>,
      options
    );
    expect(wrapper).toMatchSnapshot();
  });
});
