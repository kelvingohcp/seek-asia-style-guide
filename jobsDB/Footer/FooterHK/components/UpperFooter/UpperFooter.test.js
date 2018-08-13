import React from 'react';
import { shallow } from 'enzyme';
import UpperFooter from './UpperFooter';
import localization from '../../localization';

describe('UpperFooter:', () => {
  it('should render columns with messages and linking functions', () => {
    const wrapper = shallow(
      <UpperFooter messages={localization['en-hk']} externalLink={() => {}} cfsLink={() => {}} wordpressLink={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with company profile link', () => {
    const wrapper = shallow(
      <UpperFooter messages={localization['en-hk']} externalLink={() => {}} cfsLink={() => {}} wordpressLink={() => {}} hasCompanyProfile={true} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
