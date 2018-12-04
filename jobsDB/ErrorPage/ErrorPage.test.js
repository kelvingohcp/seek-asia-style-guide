import React from 'react';
import { shallow } from 'enzyme';

import ErrorPage from './ErrorPage';

describe('JobsDB Error Page', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ErrorPage />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly, with onClick', () => {
    const wrapper = shallow(<ErrorPage onClick={() => ({ abc: 'a' })} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly, with custome headline', () => {
    const wrapper = shallow(<ErrorPage customeText={{ headline: 'keep calm' }} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly, with custome subline', () => {
    const wrapper = shallow(<ErrorPage customeText={{ subline: 'keep calm' }} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly, with custome headline and subline', () => {
    const wrapper = shallow(<ErrorPage customeText={{ headline: 'keep calm', subline: 'try again' }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
