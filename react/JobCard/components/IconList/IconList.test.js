import React from 'react';
import { shallow } from 'enzyme';

import IconList from './IconList';

const LIST = [
  { iconType: 'careerLevel', content: 'Text Only' },
  { iconType: 'careerLevel', content: <div>Text Only</div> }
];

describe('Itemlist - Icon', () => {
  it('should render item list with icon', () => {
    const wrapper = shallow((<IconList list={LIST} />));
    expect(wrapper).toMatchSnapshot();
  });
});
