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
  it('should bold keyword', () => {
    const wrapper = shallow(<JobTitleLink job={defaultJob} keyword="Seek" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render LinkComponent when it is provided', () => {
    const wrapper = shallow(
      <JobTitleLink
        job={defaultJob}
        keyword="Seek"
        LinkComponent={({ link, children, ...restProps }) => (
          <span {...restProps}>{children}</span>
        )}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass through viewed prop', () => {
    const wrapper = shallow(<JobTitleLink job={defaultJob} viewed />);
    expect(wrapper).toMatchSnapshot();
  });
});
