import React from 'react';
import { shallow } from 'enzyme';

import Icon from './Icon';

describe('Icon', () => {
  const defaultProps = {
    type: 'chevron'
  };
  it('renders with default props', () => {
    const wrapper = shallow(<Icon {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with title', () => {
    const wrapper = shallow(<Icon title='title' {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the small style', () => {
    const wrapper = shallow(<Icon size="small" {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the large style', () => {
    const wrapper = shallow(<Icon size="large" {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the 90 deg rotated style', () => {
    const wrapper = shallow(<Icon rotation="90deg" {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the 90 deg counter-clockwise rotated style', () => {
    const wrapper = shallow(<Icon rotation="-90deg" {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the 180 deg rotated style', () => {
    const wrapper = shallow(<Icon rotation="180deg" {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the 180 deg counter-clockwise rotated style', () => {
    const wrapper = shallow(<Icon rotation="-180deg" {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the 90 deg rotate animated style', () => {
    const wrapper = shallow(<Icon rotation="90deg" smoothRotate {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the 90 deg counter-clockwise rotate animated style', () => {
    const wrapper = shallow(<Icon rotation="-90deg" smoothRotate {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the 180 deg rotate animated style', () => {
    const wrapper = shallow(<Icon rotation="180deg" smoothRotate {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the 180 deg counter-clockwise rotate animated style', () => {
    const wrapper = shallow(<Icon rotation="-180deg" smoothRotate {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the rotation resetted post-animation style', () => {
    const wrapper = shallow(<Icon rotation="reset" smoothRotate {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the 180 deg counter-clockwise rotate animated style', () => {
    const wrapper = shallow(<Icon rotation="-180deg" smoothRotate {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the bounce animation', () => {
    const wrapper = shallow(<Icon animation="bounce" {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the popIn animation', () => {
    const wrapper = shallow(<Icon animation="popIn" {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
