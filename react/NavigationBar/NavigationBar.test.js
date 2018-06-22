import { shallow } from 'enzyme';
import React from 'react';
import NavigationBar from './NavigationBar';

const renderNavigationBar = props => shallow(<NavigationBar {...props} />);

describe('NavigationBar', () => {
  it('should render with defaults', () => {
    expect(shallow(<NavigationBar />)).toMatchSnapshot();
  });

  it('should call a passed in onClick function when the button fires a click event', () => {
    const handleClick = jest.fn();
    const navigationBar = renderNavigationBar({ handleClick });

    navigationBar.find('button').simulate('click');
    expect(handleClick).toBeCalled();
  });
});
