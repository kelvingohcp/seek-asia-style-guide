import React from 'react';
import { shallow } from 'enzyme';

import FooterHK from './FooterHK';

describe('FooterHK component', () => {
  const defaultProps = {
    country: 'hk',
    language: 'en',
    domainUrl: 'jobsdb.com'
  };

  it('should render with default props', () => {
    const wrapper = shallow(<FooterHK {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with custom link renderer', () => {
    const wrapper = shallow(<FooterHK linkRenderer={() => {}} {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with "Best Companies" ListItem', () => {
    const wrapper = shallow(<FooterHK hasCompanyProfile={true} {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with custom href link', () => {
    const wrapper = shallow(
      <FooterHK
        hrefLink={({ link }) => {
          return link;
        }} {...defaultProps}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
