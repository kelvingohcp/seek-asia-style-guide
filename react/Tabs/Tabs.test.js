import { shallow } from 'enzyme';
import React from 'react';
import Tabs from './Tabs';

describe('Tabs', () => {
  it('should render with defaults', () => {
    expect(shallow(<Tabs items={[]} />)).toMatchSnapshot();
  });

  it('should render with className', () => {
    expect(shallow(<Tabs className="foo" />)).toMatchSnapshot();
  });

  it('should render with content', () => {
    expect(
      shallow(
        <Tabs
          content={[
            { title: 'Title 1', content: 'Content 1' },
            { title: 'Title 2', content: 'Content 2' }
          ]}
        />
      )
    ).toMatchSnapshot();
  });

  it('should render with no content', () => {
    expect(
      shallow(<Tabs content={[{ title: 'Title 1' }, { title: 'Title 2' }]} />)
    ).toMatchSnapshot();
  });
});
