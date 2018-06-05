import React from 'react';
import { shallow } from 'enzyme';

import CompanyLink from './CompanyLink';

const defaultCompany = {
  name: 'Seek Asia',
  link: '/jobCard',
  title: 'Jobs at Seek Asia'
};

describe('JobCard - CompanyLink', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<CompanyLink company={defaultCompany} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should bold keyword', () => {
    const wrapper = shallow(<CompanyLink company={defaultCompany} keyword="Seek" />);
    expect(wrapper).toMatchSnapshot();
  });
});
