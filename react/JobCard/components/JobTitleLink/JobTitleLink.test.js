import React from 'react';
import { shallow } from 'enzyme';

import JobTitleLink from './JobTitleLink';

const defaultJob = {
  jobTitle: 'Software Engineer',
  jobUrl: '/jobCard'
};

describe('JobCard - JobTitleLink', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<JobTitleLink job={defaultJob} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should not bold if the keyword are not match', () => {
    const wrapper = shallow(<JobTitleLink job={defaultJob} keyword="Programmer" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should bold keyword', () => {
    const wrapper = shallow(<JobTitleLink job={defaultJob} keyword="Soft Eng" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render LinkComponent when it is provided', () => {
    const wrapper = shallow(
      <JobTitleLink
        job={defaultJob}
        keyword="Engineer"
        LinkComponent={({ link, children, ...restProps }) => (
          <span {...restProps}>{children}</span>
        )}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should change className for viewed job', () => {
    const wrapper = shallow(<JobTitleLink job={defaultJob} viewed />);
    expect(wrapper).toMatchSnapshot();
  });
});
