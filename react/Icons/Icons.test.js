import React from 'react';
import { shallow } from 'enzyme';

import Icons from './Icons';

describe('Icons', () => {
  const defaultProps = {
    iconName: 'birthdate'
  };

  it('renders with default props', () => {
    const wrapper = shallow(<Icons {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with title', () => {
    const wrapper = shallow(<Icons title='title' {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
