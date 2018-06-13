import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';
import { IconEducation } from 'seek-asia-style-guide/react';

describe('ListItem:', () => {
  it('should render value', () => {
    const wrapper = shallow(<ListItem value="testValue" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render title value', () => {
    const wrapper = shallow(<ListItem value="testValue" title="testTitle" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render icon', () => {
    const wrapper = shallow(<ListItem value="testValue" title="testTitle" icon={<IconEducation />} />);
    expect(wrapper).toMatchSnapshot();
  });
});

