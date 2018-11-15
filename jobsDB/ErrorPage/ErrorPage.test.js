import React from 'react';
import { shallow } from 'enzyme';

import ErrorPage from './ErrorPage';

describe('JobsDB Error Page', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ErrorPage />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<ErrorPage onRetryClick={() => ({ abc: 'a' })} />);
    expect(wrapper).toMatchSnapshot();
  });
});
