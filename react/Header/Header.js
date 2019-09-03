import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly';
import { Text, PageBlock } from 'seek-asia-style-guide/react';
import Menu from './components/Menu/Menu';
import ActionTray from './components/ActionTray/ActionTray';
import styles from './Header.less';
import UserAccount from './components/UserAccount/UserAccount';
import { AUTHENTICATED, UNAUTHENTICATED, AUTH_PENDING } from 'seek-asia-style-guide/react/private/authStatusTypes';
import _get from 'lodash/get';
import { Icon } from 'seek-asia-style-guide/react';

const currentLocale = ({ title, ItemIcon }) => {
  return (
    <span className={styles.currentLocale}>
      <ItemIcon className={styles.localeIcon} />
      <Text whispering>{title}</Text>
    </span>
  );
};

const defaultLinkRenderer = props => (<a {...props} />);

currentLocale.propTypes = {
  title: PropTypes.string,
  ItemIcon: PropTypes.func
};

const renderPrimaryNavLinks = ({ brandStyles }, links, _style, linkRenderer) => {
  const primaryNavLinks = (links && links.map) ?
    links.map((link, index) => {
      return (
        <span key={index} className={link.hideInDesktop ? styles.hideInDesktop : styles.primaryNavLinkWrapper}>
          {
            linkRenderer({
              href: link.url,
              className: classnames(styles.primaryNavLink, brandStyles.primaryNavLink),
              children: <Text data-automation={link.automationId}>{link.title}</Text>
            })}
        </span>
      );
    }) : [];
  return (
    <div className={_style}>
      {primaryNavLinks}
    </div>
  );
};

renderPrimaryNavLinks.propTypes = {
  links: PropTypes.array,
  brandStyles: PropTypes.object.isRequired,
  linkRenderer: PropTypes.func
};

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      menuOpen: false
    };
    this.handleResize = this.handleResize.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount() {
    window.addEventListener('resize', null);
  }
  handleResize() {
    if (this.state.menuOpen && window.innerWidth > 760) {
      this.setState({ menuOpen: false });
    }
  }

  handleToggleMenu() {
    const { onMenuOpen } = this.props;
    const { menuOpen } = this.state;
    if (!menuOpen) {
      onMenuOpen();
    }
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    const {
      LogoComponent,
      logoProps,
      homeUrl,
      activeTab,
      links,
      locales,
      headerMessage,
      menuMessage,
      brandStyles,
      country,
      actionTrayProps,
      employerSite,
      loginAvailable = false,
      authenticationStatus,
      userName,
      userAccMenuItems,
      baseUrl,
      linkRenderer,
      hideNavMenu
    } = this.props;
    const { showTray } = actionTrayProps;
    const menuOpen = this.state.menuOpen;
    const shouldShowMenuWithSpace = !showTray;

    return (
      <header className={styles.root}>
        <PageBlock>
          <div className={classnames({ [styles.primaryNavNoLogin]: !loginAvailable }, styles.primaryNav)}>
            <h1 className={styles.logo}>
              {
                linkRenderer({
                  className: styles.logoLink,
                  href: homeUrl,
                  children: <ScreenReaderOnly>{_get(headerMessage, 'homeUrlText')}</ScreenReaderOnly>
                })
              }
              <LogoComponent {...logoProps} />
            </h1>

            {!hideNavMenu && renderPrimaryNavLinks({ brandStyles }, links, styles.primaryNavLinksWrapper, linkRenderer)}
            {loginAvailable && <div className={styles.secondaryNav} />}
            <UserAccount
              userName={userName}
              loginAvailable={loginAvailable}
              authenticationStatus={authenticationStatus}
              brandStyles={brandStyles}
              baseUrl={baseUrl}
              userAccMenuItems={userAccMenuItems}
              headerMessage={headerMessage}
              linkRenderer={linkRenderer}
            />
            {!showTray &&
            <div onClick={this.handleToggleMenu.bind(this)} className={styles.menuToggle}>
              <Icon type="menu" className={classnames(styles.svg, { [brandStyles.activeActionTrayIcon]: menuOpen })} size="normal" />
            </div>}
          </div>
          <ActionTray
            country={country}
            {...actionTrayProps}
            brandStyles={brandStyles}
            headerMessage={headerMessage}
            menuOpen={menuOpen}
            handleToggleMenu={this.handleToggleMenu.bind(this)}
            activeTab={activeTab}
            baseUrl={baseUrl}
            linkRenderer={linkRenderer}
          />
          <Menu
            shouldShowMenu={menuOpen}
            shouldShowMenuWithSpace={shouldShowMenuWithSpace}
            headerMessage={headerMessage}
            menuMessage={menuMessage}
            links={links}
            locales={locales}
            brandStyles={brandStyles}
            loginAvailable={loginAvailable}
            employerSite={employerSite}
            authenticationStatus={authenticationStatus}
            userName={userName}
            linkRenderer={linkRenderer}
          />
        </PageBlock>
      </header>
    );
  }
}

Header.propTypes = {
  loginAvailable: PropTypes.bool,
  LogoComponent: PropTypes.func.isRequired,
  logoProps: PropTypes.object,
  activeTab: PropTypes.string,
  homeUrl: PropTypes.string,
  links: PropTypes.array,
  locales: PropTypes.array.isRequired,
  country: PropTypes.string.isRequired,
  headerMessage: PropTypes.object.isRequired,
  menuMessage: PropTypes.object.isRequired,
  brandStyles: PropTypes.object.isRequired,
  actionTrayProps: PropTypes.object,
  employerSite: PropTypes.bool,
  linkRenderer: PropTypes.func,
  onMenuOpen: PropTypes.func,
  authenticationStatus: PropTypes.oneOf([
    AUTHENTICATED,
    UNAUTHENTICATED,
    AUTH_PENDING
  ]),
  userName: PropTypes.string,
  userAccMenuItems: PropTypes.array,
  baseUrl: PropTypes.string,
  hideNavMenu: PropTypes.bool
};

Header.defaultProps = {
  linkRenderer: defaultLinkRenderer,
  authenticationStatus: UNAUTHENTICATED,
  homeUrl: '/',
  onMenuOpen: () => {},
  hideNavMenu: false
};
