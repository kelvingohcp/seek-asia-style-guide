import React from 'react';
import { shallow } from 'enzyme';
import DropdownList from './DropdownList';
import styles from './DropdownList.less';

describe('DropdownList:', () => {
  it('should render value with children', () => {
    const wrapper = shallow(
      <DropdownList value="testValue">
        <span />
      </DropdownList>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without shadow', () => {
    const wrapper = shallow(
      <DropdownList value="testValue" noShadow>
        <span />
      </DropdownList>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with className', () => {
    const wrapper = shallow(
      <DropdownList value="testValue" className={styles.root}>
        <span />
      </DropdownList>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
