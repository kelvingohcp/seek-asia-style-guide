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

  it('should render icon in compact mode', () => {
    const wrapper = shallow(<ListItem value="testValue" title="testTitle" icon={<IconEducation />} compact />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render icon in hasHoverState mode', () => {
    const wrapper = shallow(<ListItem value="testValue" title="testTitle" icon={<IconEducation />} hasHoverState />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render icon with badge with hasHoverState and compact mode', () => {
    const wrapper = shallow(<ListItem value="testValue" title="testTitle" icon={<IconEducation />} hasHoverState compact badge={{ color: 'default', isBold: true, label: 'badge' }} />);
    expect(wrapper).toMatchSnapshot();
  });
});

