import React from 'react';
import { shallow } from 'enzyme';

import ErrorPage from './ErrorPage';

describe('ErrorPage', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ErrorPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
