import React from 'react';
import { shallow } from 'enzyme';
import Bookmark from './Bookmark';
import { BOOKMARKED, NOT_BOOKMARKED } from './Bookmark';

const defaultProps = {
  onBookmarkClick: () => {}
};

describe('Job Card - Bookmark', () => {
  it('should render null with default props', () => {
    const wrapper = shallow(<Bookmark {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render bookmarked', () => {
    const testProps = { ...defaultProps, bookmarked: BOOKMARKED };
    const wrapper = shallow(<Bookmark {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render bookmarked', () => {
    const testProps = { ...defaultProps, bookmarked: NOT_BOOKMARKED };
    const wrapper = shallow(<Bookmark {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
