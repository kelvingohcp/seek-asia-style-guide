import React from 'react';
import { shallow } from 'enzyme';
import Description from './Description';

const description = 'dummyDescription';

describe('Description', () => {
  it('should render correctly', () => {
    expect(shallow(<Description description={description} showDescription={true} />)).toMatchSnapshot();
  });

  it('should not show description when showDescription is false', () => {
    expect(shallow(<Description description={description} showDescription={false} />)).toMatchSnapshot();
  });
});
