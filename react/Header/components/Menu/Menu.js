import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Menu.less';
import MenuItem from './components/MenuItem/MenuItem';
import { Text, Section, Icon } from 'seek-asia-style-guide/react';
import { AUTHENTICATED, UNAUTHENTICATED, AUTH_PENDING } from 'seek-asia-style-guide/react/private/authStatusTypes';

export default class Menu extends Component {
  state = {
    subMenuOpen: false,
    subMenuOpenIndex: 0,
    localesMenuOpen: false
  };

  openSubMenu = i => {
    this.setState({ subMenuOpenIndex: i });
  }

  toggleSubMenu = () => {
    this.setState({ subMenuOpen: !this.state.subMenuOpen });
  }

  toggleLocalesMenu = () => {
    this.setState({ localesMenuOpen: !this.state.localesMenuOpen });
  }

  renderMenuLinks = ({ messages, brandStyles, linkRenderer }, links) => {
    if (links && links.map) {
      const menuItems = links.map((link, index) => (
        link.children ? (
          <div key={index}>
            <MenuItem
              handleClick={() => {
                this.openSubMenu(index);
                this.toggleSubMenu();
              }}
              ItemIcon={link.ItemIcon}
              brandStyles={brandStyles}
              linkRenderer={linkRenderer}>
              {link.title}
            </MenuItem>
            {this.state.subMenuOpenIndex === index && (
              <div className={this.state.subMenuOpen ? styles.showSubMenu : styles.subMenu}>
                <MenuItem
                  handleClick={this.toggleSubMenu}
                  className={styles.backLink}
                  ItemIcon={<Icon type='chevron' lineHeight='loud' size='small' rotation="-90deg" className={styles.backLink} />}
                  linkRenderer={linkRenderer}>
                  {messages['menu.backToMenu']}
                </MenuItem>
                {
                  link.children && link.children.map((sublink, i) => {
                    return (
                      <MenuItem key={i} linkUrl={sublink.url} className={styles.subItem} ItemIcon={sublink.ItemIcon} brandStyles={brandStyles} linkRenderer={linkRenderer}>
                        {sublink.title}
                      </MenuItem>
                    );
                  })
                }
              </div>
            )}
          </div>
        ) : (
          <MenuItem key={index} linkUrl={link.url} ItemIcon={link.ItemIcon} brandStyles={brandStyles} linkRenderer={linkRenderer}>
            {link.title}
          </MenuItem>
        )
      ));

      return (
        <div className={styles.menuBody}>
          {menuItems}
        </div>
      );
    }

    return null;
  }
  render() {
    const { messages, shouldShowMenu, links, locales, brandStyles, employerSite, authenticationStatus, baseUrl, userName, linkRenderer, loginAvailable } = this.props;
    const selectedLocale = locales[0];
    return (
      <div className={classnames(styles.root, { [styles.showMenu]: shouldShowMenu })}>
        <Section className={styles.headerMenu}>
          <Text whisperingTitle> {authenticationStatus === AUTHENTICATED ? userName.toUpperCase() : messages['menu.jobSeekerHeader']}</Text>
        </Section>
        {
          authenticationStatus === AUTHENTICATED && (<div className={styles.menuBody}>
            <MenuItem linkUrl={baseUrl + messages['header.profileUrl']} ItemIcon={<Icon type='profileMale' lineHeight='conversational' size='small' className={brandStyles.menuIcon} />} linkRenderer={linkRenderer} >
              {messages['header.profileTitle']}
            </MenuItem>
            <MenuItem linkUrl={baseUrl + messages['header.invitationUrl']} ItemIcon={<Icon type='jobInvitation' lineHeight='conversational' size='small' className={brandStyles.menuIcon} />} linkRenderer={linkRenderer} >
              {messages['header.invitationTitle']}
            </MenuItem>
          </div>)
        }
        {this.renderMenuLinks({ messages, brandStyles, linkRenderer }, links)}
        {
          authenticationStatus === UNAUTHENTICATED && employerSite && (<div className={styles.menuBody}>
            <MenuItem linkUrl={baseUrl + messages['header.employerSiteUrl']} ItemIcon={<Icon type='employer' lineHeight='conversational' size='small' className={styles.employer} />} linkRenderer={linkRenderer}>
              {messages['header.employerSiteTitle']}
            </MenuItem>
          </div>)
        }
        <Section className={styles.headerMenu}>
          <Text whisperingTitle>{messages['menu.settingsHeader']}</Text>
        </Section>
        <div className={styles.menuBody}>
          {locales && locales.length && (
            <MenuItem title={messages['menu.countryAndLanguage']} handleClick={this.toggleLocalesMenu} ItemIcon={<Icon type='country' lineHeight='conversational' size='small' className={brandStyles.menuIcon} />} brandStyles={brandStyles} linkRenderer={linkRenderer}>
              {selectedLocale.title}
            </MenuItem>
          )}
        </div>
        {
          authenticationStatus === AUTHENTICATED && (<div className={styles.menuBody}>
            <MenuItem className={styles.loginSignup} linkUrl={messages['header.mobileLogoutUrl']} brandStyles={brandStyles} linkRenderer={linkRenderer}>
              {messages['header.logoutTitle']}
            </MenuItem>
          </div>)
        }
        {
          authenticationStatus === UNAUTHENTICATED && loginAvailable && (
            <MenuItem className={styles.loginSignup} linkUrl={messages['header.mobileLoginUrl']} brandStyles={brandStyles} linkRenderer={linkRenderer}>
              {messages['header.loginTitle']}
            </MenuItem>
          )
        }
        {
          authenticationStatus === UNAUTHENTICATED && loginAvailable && (
            <MenuItem className={styles.loginSignup} linkUrl={baseUrl + messages['header.signupUrl']} brandStyles={brandStyles} linkRenderer={linkRenderer}>
              {messages['header.signupTitle']}
            </MenuItem>
          )
        }
        <div className={this.state.localesMenuOpen ? styles.showSubMenu : styles.subMenu}>
          <MenuItem
            handleClick={this.toggleLocalesMenu}
            className={styles.backLink}
            ItemIcon={<Icon type='chevron' lineHeight='loud' size='small' rotation="-90deg" className={styles.backLink} />}
            linkRenderer={linkRenderer}>
            {messages['menu.backToMenu']}
          </MenuItem>
          <MenuItem ItemIcon={<selectedLocale.ItemIcon className={styles.flag} />} descriptionProps={{ strong: true, className: styles.selectedLocale }}>
            {selectedLocale.title}
          </MenuItem>
          {locales && locales.map && locales.map((link, index) => {
            if (index > 0) {
              return (
                <MenuItem key={index} linkUrl={link.url} ItemIcon={<link.ItemIcon className={styles.flag} />} brandStyles={brandStyles} linkRenderer={linkRenderer}>
                  {link.title}
                </MenuItem>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  messages: PropTypes.object.isRequired,
  shouldShowMenu: PropTypes.bool,
  links: PropTypes.array,
  locales: PropTypes.array.isRequired,
  brandStyles: PropTypes.object.isRequired,
  rightLinks: PropTypes.array,
  menulinks: PropTypes.array,
  btns: PropTypes.array,
  employerSite: PropTypes.bool,
  authenticationStatus: PropTypes.oneOf([
    AUTHENTICATED,
    UNAUTHENTICATED,
    AUTH_PENDING
  ]).isRequired,
  baseUrl: PropTypes.string,
  linkRenderer: PropTypes.func,
  userName: PropTypes.string,
  loginAvailable: PropTypes.bool
};
