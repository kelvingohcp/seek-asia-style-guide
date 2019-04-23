import React from 'react';
import { shallow } from 'enzyme';
import footerMessages from './mock/footerMessage';
import Footer from './GlobalFooter';
import { FlagHKIcon } from 'seek-asia-style-guide/react';

describe('Footer component', () => {
  const defaultProps = {
    country: 'hk',
    language: 'en',
    domainUrl: 'jobsdb.com',
    footerMessages,
    locales: [
      {
        title: 'Hong Kong (English)',
        ItemIcon: FlagHKIcon,
        url: '',
        language: 'en',
        country: 'hk',
        languageDisplay: 'English'
      }
    ]
  };

  it('should render with default props', () => {
    const wrapper = shallow(<Footer {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with custom link renderer', () => {
    const wrapper = shallow(<Footer linkRenderer={() => {}} {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with custom href link', () => {
    const wrapper = shallow(
      <Footer
        hrefLink={({ link }) => {
          return link;
        }} {...defaultProps}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
