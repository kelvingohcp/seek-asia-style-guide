import React from 'react';
import { shallow } from 'enzyme';
import JobMeta from './JobMeta';

jest.mock('../../JobCardPropTypes', () => {
  return {
    JobCardPropTypes: {
      job: {}
    }
  };
});

const sellingPoints = [
  'sellingPoints 1',
  'sellingPoints 2',
  'sellingPoints 3'
];
const description = 'dummyDescription';

describe('JobMeta', () => {
  it('should render correctly', () => {
    expect(shallow(<JobMeta sellingPoints={sellingPoints} isSplitView={true} showSellingPoint={true} enableBrandedAd={true} description={description} showDescription={true} shelfSectionOpen={false} />)).toMatchSnapshot();
  });
});
