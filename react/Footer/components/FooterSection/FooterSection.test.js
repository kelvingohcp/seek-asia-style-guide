import React from 'react';
import { shallow } from 'enzyme';
import FooterSection from './FooterSection';
import footerMessage from '../../mock/footerMessage';
import _get from 'lodash/get';

describe('FooterSection', () => {
  it('render footer section with wrong message', () => {
    const wrapper = shallow(
      <FooterSection
        sessionClass={''}
        sessionMessage={_get(footerMessage, 'wrongObject')}
        linkRenderer={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('render footer section with subSessionMessage', () => {
    const wrapper = shallow(
      <FooterSection
        sessionClass={''}
        sessionMessage={_get(footerMessage, 'aboutJobsDB')}
        subSessionMessage={_get(footerMessage, 'partners')}
        linkRenderer={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('render footer section with hideInMobile', () => {
    const wrapper = shallow(
      <FooterSection
        sessionClass={''}
        sessionMessage={_get(footerMessage, 'aboutJobsDB')}
        hideInMobile={['aboutJobsDB', 'faq']}
        linkRenderer={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('render footer section with icon', () => {
    const wrapper = shallow(
      <FooterSection
        sessionClass={''}
        sessionMessage={_get(footerMessage, 'contact')}
        linkRenderer={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
