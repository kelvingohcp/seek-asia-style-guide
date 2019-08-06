import React from 'react';
import { shallow } from 'enzyme';

import JobTitleLink, { JobTitlePartForTest as JobTitlePart } from './JobTitleLink';

const defaultJob = {
  jobTitle: 'Software Engineer Richmond',
  jobUrl: '/jobCard'
};

describe('JobCard - JobTitleLink', () => {
  it('should render without keywords', () => {
    const wrapper = shallow(<JobTitleLink job={defaultJob} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not bold anything if keywords do not match', () => {
    const wrapper = shallow(<JobTitleLink job={defaultJob} keyword="Programmer" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should bold matching keywords', () => {
    const wrapper = shallow(<JobTitleLink job={defaultJob} keyword="Soft Eng" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with LinkComponent', () => {
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

  it('should render with viewed flag', () => {
    const wrapper = shallow(<JobTitleLink job={defaultJob} viewed />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('JobTitlePart', () => {
    it('should render a job title part', () => {
      const wrapper = shallow(<JobTitlePart>foo</JobTitlePart>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render a highlighted job title part', () => {
      const wrapper = shallow(<JobTitlePart isHighlighted>foo</JobTitlePart>);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
