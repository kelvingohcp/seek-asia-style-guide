import React from 'react';
import { shallow } from 'enzyme';

import CardLoader from './CardLoader';

describe('CardLoader', () => {
  it('should render with defaults', () => {
    expect(shallow(<CardLoader />)).toMatchSnapshot();
  });
});
