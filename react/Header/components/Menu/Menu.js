import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Menu.less';
import MenuItem from './components/MenuItem/MenuItem';
import { Text, Section, Icon } from 'seek-asia-style-guide/react';
import { AUTHENTICATED, UNAUTHENTICATED, AUTH_PENDING } from 'seek-asia-style-guide/react/private/authStatusTypes';
import _get from 'lodash/get';

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

  renderMenuLinks = ({ menuMessage, brandStyles, linkRenderer }, links) => {
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
                  {_get(menuMessage, 'backToMenu')}
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
    const { menuMessage, headerMessage, shouldShowMenu, links, locales, brandStyles, employerSite, authenticationStatus, userName, linkRenderer, loginAvailable } = this.props;
    const selectedLocale = locales[0];
    return (
      <div className={classnames(styles.root, { [styles.showMenu]: shouldShowMenu })}>
        <Section className={styles.headerMenu}>
          <Text whisperingTitle> {authenticationStatus === AUTHENTICATED ? userName.toUpperCase() : _get(menuMessage, 'jobSeekerHeader')}</Text>
        </Section>
        {
          authenticationStatus === AUTHENTICATED && (<div className={styles.menuBody}>
            <MenuItem linkUrl={_get(headerMessage, 'profile.url')} ItemIcon={<Icon type='profileMale' lineHeight='conversational' size='small' className={brandStyles.menuIcon} />} linkRenderer={linkRenderer} >
              {_get(headerMessage, 'profile.title')}
            </MenuItem>
            <MenuItem linkUrl={_get(headerMessage, 'invitation.url')} ItemIcon={<Icon type='jobInvitation' lineHeight='conversational' size='small' className={brandStyles.menuIcon} />} linkRenderer={linkRenderer} >
              {_get(headerMessage, 'invitation.title')}
            </MenuItem>
          </div>)
        }
        {this.renderMenuLinks({ menuMessage, brandStyles, linkRenderer }, links)}
        {
          authenticationStatus === UNAUTHENTICATED && employerSite && (<div className={styles.menuBody}>
            <MenuItem linkUrl={_get(headerMessage, 'employer.url')} ItemIcon={<Icon type='employer' lineHeight='conversational' size='small' className={styles.employer} />} linkRenderer={linkRenderer}>
              {_get(headerMessage, 'employer.title')}
            </MenuItem>
          </div>)
        }
        <Section className={styles.headerMenu}>
          <Text whisperingTitle>{_get(menuMessage, 'settingsHeader')}</Text>
        </Section>
        <div className={styles.menuBody}>
          {locales && locales.length && (
            <MenuItem title={_get(menuMessage, 'countryAndLanguage')} handleClick={this.toggleLocalesMenu} ItemIcon={<Icon type='country' lineHeight='conversational' size='small' className={brandStyles.menuIcon} />} brandStyles={brandStyles} linkRenderer={linkRenderer}>
              {selectedLocale.title}
            </MenuItem>
          )}
        </div>
        {
          authenticationStatus === AUTHENTICATED && (<div className={styles.menuBody}>
            <MenuItem className={styles.loginSignup} linkUrl={_get(headerMessage, 'mobileLogoutUrl')} brandStyles={brandStyles} linkRenderer={linkRenderer}>
              {_get(headerMessage, 'logout.title')}
            </MenuItem>
          </div>)
        }
        {
          authenticationStatus === UNAUTHENTICATED && loginAvailable && (
            <MenuItem className={styles.loginSignup} linkUrl={_get(headerMessage, 'mobileLoginUrl')} brandStyles={brandStyles} linkRenderer={linkRenderer}>
              {_get(headerMessage, 'login.title')}
            </MenuItem>
          )
        }
        {
          authenticationStatus === UNAUTHENTICATED && loginAvailable && (
            <MenuItem className={styles.loginSignup} linkUrl={_get(headerMessage, 'signUp.url')} brandStyles={brandStyles} linkRenderer={linkRenderer}>
              {_get(headerMessage, 'signUp.title')}
            </MenuItem>
          )
        }
        <div className={this.state.localesMenuOpen ? styles.showSubMenu : styles.subMenu}>
          <MenuItem
            handleClick={this.toggleLocalesMenu}
            className={styles.backLink}
            ItemIcon={<Icon type='chevron' lineHeight='loud' size='small' rotation="-90deg" className={styles.backLink} />}
            linkRenderer={linkRenderer}>
            {_get(menuMessage, 'backToMenu')}
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
  headerMessage: PropTypes.object.isRequired,
  menuMessage: PropTypes.object.isRequired,
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
  linkRenderer: PropTypes.func,
  userName: PropTypes.string,
  loginAvailable: PropTypes.bool
};
