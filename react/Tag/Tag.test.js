import React from 'react';
import { shallow } from 'enzyme';
import Tag from './Tag';

describe('Tag:', () => {
  it('should render Tag with label "This is a Tag"', () => {
    const wrapper = shallow(<Tag label='This is a Tag' />);
    expect(wrapper).toMatchSnapshot();
  });
});

