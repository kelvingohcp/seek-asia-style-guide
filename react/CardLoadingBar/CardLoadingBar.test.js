import React from 'react';
import { shallow } from 'enzyme';

import CardLoadingBar from './CardLoadingBar';
import CardLoader from '../CardLoader/CardLoader';

describe('CardLoadingBar', () => {
  it('should render with empty loadingBar', () => {
    expect(shallow(
      <CardLoader >
        <CardLoadingBar />
      </CardLoader>
    )).toMatchSnapshot();
  });

  it('should render with full width loadingBar', () => {
    expect(shallow(
      <CardLoader >
        <CardLoadingBar width={'1oo%'} />
      </CardLoader>
    )).toMatchSnapshot();
  });

  it('should render loadingBar width and height in px', () => {
    expect(shallow(
      <CardLoader >
        <CardLoadingBar width={10} height={4} />
      </CardLoader>
    )).toMatchSnapshot();
  });

  it('should render loadingBar height in px', () => {
    expect(shallow(
      <CardLoader >
        <CardLoadingBar width={10} height={4} />
      </CardLoader>
    )).toMatchSnapshot();
  });

  it('should render loadingBar from right', () => {
    expect(shallow(
      <CardLoader >
        <CardLoadingBar width={'5o%'} inverse />
      </CardLoader>
    )).toMatchSnapshot();
  });
});
