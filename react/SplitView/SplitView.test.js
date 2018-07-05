import React from 'react';
import { shallow } from 'enzyme';

import SplitView from './SplitView';

const renderSplitView = props =>
  shallow(
    <SplitView {...props}>
      <div> Child 1</div>
      <div> Child 2</div>
    </SplitView>
  );

describe('Split View:', () => {
  it('should render with default props', () => {
    expect(renderSplitView()).toMatchSnapshot();
  });

  it('should render with height prop', () => {
    expect(renderSplitView({ height: 200 })).toMatchSnapshot();
  });
});
