import React, { Component } from 'react';
import { Button, Text } from 'seek-asia-style-guide/react';
import PropTypes from 'prop-types';
import { AUTHENTICATED, UNAUTHENTICATED, AUTH_PENDING } from '../../../private/authStatusTypes';
import styles from './UserAccount.less';
import UserAccountMenu from '../UserAccountMenu/UserAccountMenu';
import _get from 'lodash/get';

export default class UserAccount extends Component {
  static defaultProps = {
    onMenuToggle: () => { },
    authenticationStatus: UNAUTHENTICATED
  }

  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  handleMenuToggleClick = () => {
    this.setState(state => {
      this.props.onMenuToggle({ open: !state.menuOpen });
      return { menuOpen: !state.menuOpen };
    });
  };

  render() {
    const {
      loginAvailable,
      authenticationStatus,
      userName,
      userAccMenuItems,
      headerMessage,
      baseUrl,
      linkRenderer
    } = this.props;

    if (loginAvailable) {
      switch (authenticationStatus) {
        case AUTHENTICATED:
          return (
            <div className={styles.secondaryNav}>
              <span>
                {<UserAccountMenu userAccMenuItems={userAccMenuItems} userName={userName} linkRenderer={linkRenderer} />}
              </span>
            </div>
          );

        case UNAUTHENTICATED:
          return (
            <div className={styles.secondaryNav}>
              {linkRenderer({
                href: `${baseUrl + _get(headerMessage, 'login.url')}`,
                children: <Button
                  className={styles.userAcclink}
                  color='hyperlink'
                  data-automation='log-in'>
                  {`${_get(headerMessage, 'login.title')}`}
                </Button>
              })}
              <Text className={styles.displayText}>{_get(headerMessage, 'seperatorOr')}</Text>
              {linkRenderer({
                href: `${baseUrl + _get(headerMessage, 'signUp.url')}`,
                children: <Button
                  className={styles.signup}
                  color='hyperlink'
                  data-automation='sign-up'>
                  {`${_get(headerMessage, 'signUp.title')}`}
                </Button>
              })}
              {
                linkRenderer({
                  href: `${baseUrl + _get(headerMessage, 'employer.url')}`,
                  children: <Button
                    className={styles.userAcclink}
                    color='tertiary'
                    compact
                    data-automation='employer-site'>
                    {`${_get(headerMessage, 'employer.title')}`}
                  </Button>
                })}
            </div>
          );
        default:
          return null;
      }
    }
    return null;
  }
}

UserAccount.propTypes = {
  loginAvailable: PropTypes.bool.isRequired,
  authenticationStatus: PropTypes.oneOf([
    AUTHENTICATED,
    UNAUTHENTICATED,
    AUTH_PENDING
  ]).isRequired,
  userName: PropTypes.string,
  brandStyles: PropTypes.object,
  loginTitle: PropTypes.string,
  loginUrl: PropTypes.string,
  signupTitle: PropTypes.string,
  signupUrl: PropTypes.string,
  userAccMenuItems: PropTypes.array,
  onMenuToggle: PropTypes.func,
  baseUrl: PropTypes.string,
  headerMessage: PropTypes.object.isRequired,
  linkRenderer: PropTypes.func
};
