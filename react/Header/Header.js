import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly';
import { Text, PageBlock } from 'seek-asia-style-guide/react';
import Menu from './components/Menu/Menu';
import ActionTray from './components/ActionTray/ActionTray';
import CountryDropdown from './components/CountryDropdown/CountryDropdown';
import { sortCurrentLocaleToTop } from './localeUtils';
import styles from './Header.less';
import UserAccount from './components/UserAccount/UserAccount';
import { AUTHENTICATED, UNAUTHENTICATED, AUTH_PENDING } from 'seek-asia-style-guide/react/private/authStatusTypes';

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
      messages,
      brandStyles,
      country,
      language,
      actionTrayProps,
      employerSite,
      loginAvailable = false,
      selectCountry = true,
      authenticationStatus,
      userName,
      userAccMenuItems,
      baseUrl,
      linkRenderer
    } = this.props;

    const localeList = sortCurrentLocaleToTop({ locales, country, language });
    const menuOpen = this.state.menuOpen;

    return (
      <header className={styles.root}>
        <PageBlock>
          <div className={styles.externalNav}>
            {
              // *** Country Selector ***
              selectCountry &&
              (
                <CountryDropdown
                  links={localeList}
                  checked={0}
                  messages={messages}
                  linkRenderer={linkRenderer}
                />
              ) ||
              (
                <div className={styles.locale}>
                  {currentLocale(localeList[0])}
                </div>
              )
            }
          </div>
          <div className={loginAvailable ? styles.primaryNav : styles.primaryNavNoLogin}>
            <h1 className={styles.logo}>
              {
                linkRenderer({
                  className: styles.logoLink,
                  href: homeUrl,
                  children: <ScreenReaderOnly>{messages['header.homeUrlText']}</ScreenReaderOnly>
                })
              }
              <LogoComponent {...logoProps} />
            </h1>

            {renderPrimaryNavLinks({ brandStyles }, links, styles.primaryNavLinksWrapper, linkRenderer)}
            {loginAvailable && <div className={styles.secondaryNav} />}
            <UserAccount
              userName={userName}
              loginAvailable={loginAvailable}
              authenticationStatus={authenticationStatus}
              brandStyles={brandStyles}
              baseUrl={baseUrl}
              userAccMenuItems={userAccMenuItems}
              messages={messages}
              linkRenderer={linkRenderer}
            />
          </div>
          <ActionTray
            country={country}
            {...actionTrayProps}
            brandStyles={brandStyles}
            messages={messages}
            menuOpen={menuOpen}
            handleToggleMenu={this.handleToggleMenu.bind(this)}
            activeTab={activeTab}
            baseUrl={baseUrl}
            linkRenderer={linkRenderer}
          />
          <Menu
            shouldShowMenu={menuOpen}
            messages={messages}
            links={links}
            locales={localeList}
            brandStyles={brandStyles}
            loginAvailable={loginAvailable}
            employerSite={employerSite}
            authenticationStatus={authenticationStatus}
            baseUrl={baseUrl}
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
  language: PropTypes.string.isRequired,
  messages: PropTypes.object.isRequired,
  brandStyles: PropTypes.object.isRequired,
  actionTrayProps: PropTypes.object,
  employerSite: PropTypes.bool,
  linkRenderer: PropTypes.func,
  selectCountry: PropTypes.bool,
  onMenuOpen: PropTypes.func,
  authenticationStatus: PropTypes.oneOf([
    AUTHENTICATED,
    UNAUTHENTICATED,
    AUTH_PENDING
  ]),
  userName: PropTypes.string,
  userAccMenuItems: PropTypes.array,
  baseUrl: PropTypes.string
};

Header.defaultProps = {
  linkRenderer: defaultLinkRenderer,
  authenticationStatus: UNAUTHENTICATED,
  homeUrl: '/'
};
