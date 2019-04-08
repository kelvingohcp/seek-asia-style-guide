import React from 'react';
import { shallow } from 'enzyme';
import FooterLinks from './FooterLinks';
import footerMessages from '../../mock/footerMessage';

describe('FooterLinks:', () => {
  it('should render links with messages and linking functions', () => {
    const wrapper = shallow(
      <FooterLinks footerMessages={footerMessages} linkRenderer={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
