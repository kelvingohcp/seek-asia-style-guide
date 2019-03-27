import React from 'react';
import { shallow } from 'enzyme';

import JobLabel from './JobLabel';

describe('JobLabel test', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<JobLabel />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with applied badge', () => {
    const wrapper = shallow(<JobLabel applied={true} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with viewed label', () => {
    const wrapper = shallow(<JobLabel viewed='Viewed 1 hour ago' />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with expired badge', () => {
    const wrapper = shallow(<JobLabel expired={true} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ONLY with applied badge', () => {
    const wrapper = shallow(<JobLabel applied={true} viewed='Viewed 1 hour ago' expired={true} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ONLY with expired badge', () => {
    const wrapper = shallow(<JobLabel viewed='Viewed 1 hour ago' expired={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});
