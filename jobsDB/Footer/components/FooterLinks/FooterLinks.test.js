import React from 'react';
import { shallow } from 'enzyme';
import FooterLinks from './FooterLinks';

describe('FooterLinks:', () => {
  it('should render links with messages', () => {
    const wrapper = shallow(
      <FooterLinks messages={{}} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
