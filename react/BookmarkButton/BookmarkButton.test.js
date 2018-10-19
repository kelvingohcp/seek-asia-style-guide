import React from 'react';
import { shallow } from 'enzyme';
import BookmarkButton from './BookmarkButton';

const defaultProps = {
  onBookmarkClick: () => {}
};

describe('BookmarkButton', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<BookmarkButton {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render bookmarked', () => {
    const testProps = {
      ...defaultProps,
      isBookmarked: true
    };
    const wrapper = shallow(<BookmarkButton {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with class', () => {
    const testProps = {
      ...defaultProps,
      className: 'aClassyClass'
    };
    const wrapper = shallow(<BookmarkButton {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
