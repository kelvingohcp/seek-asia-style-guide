import React from 'react';
import { shallow } from 'enzyme';
import CompanyBanner from './CompanyBanner';

describe('CompanyBanner', () => {
  it('should not render if banner url is not provided', () => {
    expect(shallow(<CompanyBanner enableBrandedAd />)).toMatchSnapshot();
  });

  it('should not render branded ad is not enabled', () => {
    expect(shallow(<CompanyBanner enableBrandedAd={false} bannerUrl="/foo" />)).toMatchSnapshot();
  });

  it('should render on desktop', () => {
    expect(shallow(<CompanyBanner enableBrandedAd bannerUrl="/foo" />)).toMatchSnapshot();
  });

  it('should render on mobile', () => {
    expect(shallow(<CompanyBanner enableBrandedAd bannerUrl="/foo" isMobile />)).toMatchSnapshot();
  });

  it('should render with placeholder', () => {
    expect(shallow(<CompanyBanner enableBrandedAd bannerUrl="/foo" isMobile isIntersecting={false} />)).toMatchSnapshot();
  });
});
