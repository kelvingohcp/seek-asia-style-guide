import React, { Component } from 'react';
import { Button, Text } from 'seek-asia-style-guide/react';
import PropTypes from 'prop-types';
import { AUTHENTICATED, UNAUTHENTICATED, AUTH_PENDING } from '../../../private/authStatusTypes';
import styles from './UserAccount.less';
import UserAccountMenu from '../UserAccountMenu/UserAccountMenu';

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
      messages,
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
                href: `${baseUrl + messages['header.loginUrl']}`,
                children: <Button
                  className={styles.userAcclink}
                  color='hyperlink'>
                  {`${messages['header.loginTitle']}`}
                </Button>
              })}
              <Text className={styles.displayText}>{messages['header.seperatorOr']}</Text>
              {linkRenderer({
                href: `${baseUrl + messages['header.signupUrl']}`,
                children: <Button
                  className={styles.signup}
                  color='hyperlink'>
                  {`${messages['header.signupTitle']}`}
                </Button>
              })}
              {
                linkRenderer({
                  href: `${baseUrl + messages['header.employerSiteUrl']}`,
                  children: <Button
                    className={styles.userAcclink}
                    color='tertiary'
                    compact>
                    {`${messages['header.employerSiteTitle']}`}
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
  messages: PropTypes.object.isRequired,
  linkRenderer: PropTypes.func
};
