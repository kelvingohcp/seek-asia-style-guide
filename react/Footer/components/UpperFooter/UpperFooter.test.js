import React from 'react';
import { shallow } from 'enzyme';
import UpperFooter from './UpperFooter';
import footerMessage from '../../mock/footerMessage';

describe('UpperFooter:', () => {
  it('should render columns with messages and linking functions', () => {
    const wrapper = shallow(
      <UpperFooter footerMessages={footerMessage} linkRenderer={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with company profile link', () => {
    const wrapper = shallow(
      <UpperFooter footerMessages={footerMessage} linkRenderer={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
