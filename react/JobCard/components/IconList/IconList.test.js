import React from 'react';
import { shallow } from 'enzyme';

import IconList from './IconList';

const LIST = [
  { iconType: 'careerLevel', content: 'Text Only' },
  { iconType: 'careerLevel', content: <div>Text Only Test</div> }
];

describe('Itemlist - Icon', () => {
  it('should render item list with icon', () => {
    const wrapper = shallow((<IconList list={LIST} />));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with Not specified label if content is missing', () => {
    const wrapper = shallow((<IconList list={[...LIST, { iconType: 'android' }]} />));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with Not specified label if content is an empty string', () => {
    const wrapper = shallow((<IconList list={[{ iconType: 'android', content: '' }]} />));
    expect(wrapper).toMatchSnapshot();
  });
});
