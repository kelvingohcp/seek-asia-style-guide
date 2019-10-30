import React from 'react';
import { shallow, render } from 'enzyme';
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
    linkRenderer: props => (<a {...props} />),
    pageType: 'home'
  };

  it('should render with default props', () => {
    const wrapper = shallow(<UserAccount {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render is UNAUTHENTICATED', () => {
    const wrapper = shallow(<UserAccount {...{ ...defaultProps, authenticationStatus: UNAUTHENTICATED }} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render login url based on pagetype', () => {
    const wrapper = render(<UserAccount {...{ ...defaultProps, authenticationStatus: UNAUTHENTICATED, pageType: 'jobListing' }} />);
    expect(wrapper).toMatchSnapshot();
    const wrapper2 = render(<UserAccount {...{ ...defaultProps, authenticationStatus: UNAUTHENTICATED, pageType: 'jobAd' }} />);
    expect(wrapper2).toMatchSnapshot();
  });
});

