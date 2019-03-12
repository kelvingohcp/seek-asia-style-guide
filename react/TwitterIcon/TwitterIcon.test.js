import React from 'react';
import { shallow } from 'enzyme';
import TwitterIcon from './TwitterIcon';

describe('TwitterIcon:', () => {
  it('should render filled', () => {
    const wrapper = shallow(<TwitterIcon filled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render generic', () => {
    const wrapper = shallow(<TwitterIcon generic />);
    expect(wrapper).toMatchSnapshot();
  });
});
