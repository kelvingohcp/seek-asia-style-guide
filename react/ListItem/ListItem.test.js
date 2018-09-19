import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';
import { Icons } from 'seek-asia-style-guide/react';
import styles from './ListItem.less';

describe('ListItem:', () => {
  it('should render value', () => {
    const wrapper = shallow(<ListItem value="testValue" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render title value', () => {
    const wrapper = shallow(<ListItem value="testValue" title="testTitle" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render custom left padding', () => {
    const wrapper = shallow(<ListItem value="testValue" title="testTitle" leftPadding={8} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render custom left padding with light font weight', () => {
    const wrapper = shallow(<ListItem value="testValue" title="testTitle" leftPadding={8} descriptionProps={{ light: true }} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render custom left padding with light font weight and secondary text', () => {
    const wrapper = shallow(<ListItem value="testValue" title="testTitle" leftPadding={8} descriptionProps={{ light: true, secondary: true }} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render custom left padding with light font weight, secondary text and onclick function', () => {
    const wrapper = shallow(<ListItem value="testValue" title="testTitle" leftPadding={8} descriptionProps={{ light: true, secondary: true }} onClick={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render icon', () => {
    const wrapper = shallow(<ListItem value="testValue" title="testTitle" icon={<Icons iconName="education" />} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render icon in compact mode', () => {
    const wrapper = shallow(<ListItem value="testValue" title="testTitle" icon={<Icons iconName="education" />} compact />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render icon in hasHoverState mode', () => {
    const wrapper = shallow(<ListItem value="testValue" title="testTitle" icon={<Icons iconName="education" />} hasHoverState />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render icon with badge with hasHoverState and compact mode', () => {
    const wrapper = shallow(<ListItem value="testValue" title="testTitle" icon={<Icons iconName="education" />} hasHoverState compact badge={{ color: 'default', isBold: true, label: 'badge' }} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with className', () => {
    const wrapper = shallow(<ListItem value="testValue" className={styles.root} />);
    expect(wrapper).toMatchSnapshot();
  });
});
