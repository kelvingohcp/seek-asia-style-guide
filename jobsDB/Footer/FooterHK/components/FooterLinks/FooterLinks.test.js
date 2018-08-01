import React from 'react';
import { shallow } from 'enzyme';
import FooterLinks from './FooterLinks';
import localization from '../../localization';

describe('FooterLinks:', () => {
  it('should render links with messages and linking functions', () => {
    const wrapper = shallow(
      <FooterLinks messages={localization['en-hk']} cfsLink={() => {}} wordpressLink={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
