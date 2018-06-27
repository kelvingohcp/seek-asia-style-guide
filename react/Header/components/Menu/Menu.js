import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Menu.less';
import MenuItem from './components/MenuItem/MenuItem';
import { Text, Section, MoreIcon, ChevronIcon, CheckMarkIcon, GlobeIcon, EmployerIcon, ProfileIcon, JobInvitationIcon } from 'seek-asia-style-guide/react';
import { AUTHENTICATED, UNAUTHENTICATED, AUTH_PENDING } from 'seek-asia-style-guide/react/private/authStatusTypes';

export default class Menu extends Component {
  constructor() {
    super();

    this.state = {
      moreMenuOpen: false,
      localesMenuOpen: false
    };
  }

  toggleMoreMenu() {
    this.setState({ moreMenuOpen: !this.state.moreMenuOpen });
  }

  toggleLocalesMenu() {
    this.setState({ localesMenuOpen: !this.state.localesMenuOpen });
  }

  renderMenuLinks = ({ more, messages, brandStyles, linkRenderer }, links) => {
    if (links && links.map) {
      const menuItems = links.map((link, index) => (
        <MenuItem key={index} linkUrl={link.url} ItemIcon={link.ItemIcon} brandStyles={brandStyles} linkRenderer={linkRenderer}>
          <Text>{link.title}</Text>
        </MenuItem>
      ));

      if (more) {
        menuItems.push((
          <MenuItem key={menuItems.length} handleClick={this.toggleMoreMenu.bind(this)} ItemIcon={MoreIcon} brandStyles={brandStyles} linkRenderer={linkRenderer}>
            <Text>{messages['menu.more']}</Text>
          </MenuItem>
        ));
      }

      return (
        <div className={styles.menuBody}>
          {menuItems}
        </div>
      );
    }

    return null;
  }
  render() {
    const { messages, shouldShowMenu, links, locales, more, brandStyles, employerSite, authenticationStatus, baseUrl, userName, linkRenderer, loginAvailable } = this.props;
    return (
      <div className={classnames(styles.root, { [styles.showMenu]: shouldShowMenu })}>
        <Section className={styles.headerMenu}>
          <Text whisperingTitle> {authenticationStatus === AUTHENTICATED ? userName.toUpperCase() : messages['menu.jobSeekerHeader']}</Text>
        </Section>
        {
          authenticationStatus === AUTHENTICATED && (<div className={styles.menuBody}>
            <MenuItem linkUrl={baseUrl + messages['header.profileUrl']} ItemIcon={ProfileIcon} brandStyles={brandStyles} linkRenderer={linkRenderer} >
              <Text>{messages['header.profileTitle']}</Text>
            </MenuItem>
            <MenuItem linkUrl={baseUrl + messages['header.invitationUrl']} ItemIcon={JobInvitationIcon} brandStyles={brandStyles} linkRenderer={linkRenderer} >
              <Text>{messages['header.invitationTitle']}</Text>
            </MenuItem>
          </div>)
        }
        {this.renderMenuLinks({ more, messages, brandStyles, linkRenderer }, links)}
        {
          authenticationStatus === UNAUTHENTICATED && employerSite && (<div className={styles.menuBody}>
            <MenuItem linkUrl={baseUrl + messages['header.employerSiteUrl']} ItemIcon={EmployerIcon} iconProps={{ svgClassName: styles.employer }} brandStyles={brandStyles} linkRenderer={linkRenderer}>
              <Text>{messages['header.employerSiteTitle']}</Text>
            </MenuItem>
          </div>)
        }
        <Section className={styles.headerMenu}>
          <Text whisperingTitle>{messages['menu.settingsHeader']}</Text>
        </Section>
        <div className={styles.menuBody}>
          {locales && locales.length && (
            <MenuItem className={styles.countryAndLanguage} handleClick={this.toggleLocalesMenu.bind(this)} ItemIcon={GlobeIcon} brandStyles={brandStyles} linkRenderer={linkRenderer}>
              <div>
                <Text className={styles.countryLanguageText}>{messages['menu.countryAndLanguage']}</Text>
                <Text intimate className={styles.currentLocale}>{locales[0].title}</Text>
              </div>
            </MenuItem>
          )}
        </div>
        {
          authenticationStatus === AUTHENTICATED && (<div className={styles.menuBody}>
            <MenuItem itemClass={styles.loginSignup} linkUrl={messages['header.logoutUrl']} brandStyles={brandStyles} linkRenderer={linkRenderer}>
              <Text>{messages['header.logoutTitle']}</Text>
            </MenuItem>
          </div>)
        }
        {
          authenticationStatus === UNAUTHENTICATED && loginAvailable && (
            <MenuItem itemClass={styles.loginSignup} linkUrl={baseUrl + messages['header.loginUrl']} brandStyles={brandStyles} linkRenderer={linkRenderer}>
              <Text>{messages['header.loginTitle']}</Text>
            </MenuItem>
          )
        }
        {
          authenticationStatus === UNAUTHENTICATED && loginAvailable && (
            <MenuItem itemClass={styles.loginSignup} linkUrl={baseUrl + messages['header.signupUrl']} brandStyles={brandStyles} linkRenderer={linkRenderer}>
              <Text>{messages['header.signupTitle']}</Text>
            </MenuItem>
          )
        }
        <div className={this.state.moreMenuOpen ? styles.showSubMenu : styles.subMenu}>
          <MenuItem handleClick={this.toggleMoreMenu.bind(this)} itemClass={styles.backLink} ItemIcon={ChevronIcon} iconProps={{ direction: 'left', svgClassName: styles.backChevron }} brandStyles={brandStyles} linkRenderer={linkRenderer}>
            <Text>{messages['menu.backToMenu']}</Text>
          </MenuItem>
          <Section className={styles.headerMenu}>
            <Text whisperingTitle>{messages['menu.moreHeader']}</Text>
          </Section>
          {more && more.map && more.map((link, index) => (
            <MenuItem key={index} linkUrl={link.url} itemClass={styles.moreItem} ItemIcon={link.ItemIcon} brandStyles={brandStyles} linkRenderer={linkRenderer}>
              <Text>{link.title}</Text>
            </MenuItem>
          ))}
        </div>
        <div className={this.state.localesMenuOpen ? styles.showSubMenu : styles.subMenu}>
          <MenuItem handleClick={this.toggleLocalesMenu.bind(this)} itemClass={styles.backLink} ItemIcon={ChevronIcon} iconProps={{ direction: 'left', svgClassName: styles.backChevron }} brandStyles={brandStyles} linkRenderer={linkRenderer}>
            <Text>{messages['menu.backToMenu']}</Text>
          </MenuItem>
          <MenuItem ItemIcon={locales[0].ItemIcon} itemClass={styles.selectedLocaleItem} brandStyles={brandStyles}>
            <span className={styles.selectedLocale}>
              <Text>{locales[0].title}</Text>
              <CheckMarkIcon className={styles.selectedLocaleCheck} svgClassName={styles.selectedLocaleCheckIcon} />
            </span>
          </MenuItem>
          {locales && locales.map && locales.map((link, index) => {
            if (index > 0) {
              return (
                <MenuItem key={index} linkUrl={link.url} ItemIcon={link.ItemIcon} brandStyles={brandStyles} linkRenderer={linkRenderer}>
                  <Text>{link.title}</Text>
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
  more: PropTypes.array,
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
