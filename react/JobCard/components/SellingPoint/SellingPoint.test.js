import React from 'react';
import { shallow } from 'enzyme';
import SellingPoint from './SellingPoint';

const sellingPoints = [
  'sellingPoints 1',
  'sellingPoints 2',
  'sellingPoints 3'
];

describe('SellingPoint', () => {
  it('should render correctly', () => {
    expect(shallow(<SellingPoint sellingPoints={sellingPoints} isSplitView showSellingPoint enableBrandedAd />)).toMatchSnapshot();
  });

  it('should not render selling points when showSellingPoint is false', () => {
    expect(shallow(<SellingPoint sellingPoints={sellingPoints} isSplitView showSellingPoint={false} enableBrandedAd />)).toMatchSnapshot();
  });

  it('should not render selling points when no sellingPoints', () => {
    expect(shallow(<SellingPoint sellingPoints={null} isSplitView showSellingPoint enableBrandedAd />)).toMatchSnapshot();
  });
});
