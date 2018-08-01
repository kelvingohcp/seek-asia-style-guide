import React from 'react';
import { shallow } from 'enzyme';
import PartnerSites from './PartnerSites';
import localization from '../../localization';

describe('PartnerSites:', () => {
  it('should render list with messages and linking function', () => {
    const wrapper = shallow(
      <PartnerSites messages={localization['en-hk']} externalLink={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
