import React from 'react';
import { shallow } from 'enzyme';
import headerMessage from '../../mock/headerMessage';
import { AUTHENTICATED, UNAUTHENTICATED } from '../../../private/authStatusTypes';

import UserAccount from './UserAccount';

describe('UserAccount', () => {
  const defaultProps = {
    headerMessage,
    authenticationStatus: AUTHENTICATED,
    loginAvailable: true,
    userName: 'JObsDB',
    userAccMenuItems: [],
    linkRenderer: () => {}
  };

  it('should render with default props', () => {
    const wrapper = shallow(<UserAccount {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render is UNAUTHENTICATED', () => {
    const wrapper = shallow(<UserAccount {...{ ...defaultProps, authenticationStatus: UNAUTHENTICATED }} />);
    expect(wrapper).toMatchSnapshot();
  });
});

