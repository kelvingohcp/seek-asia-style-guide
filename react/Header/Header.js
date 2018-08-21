import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Text, ListItem } from 'seek-asia-style-guide/react';
import Menu from './components/Menu/Menu';
import ActionTray from './components/ActionTray/ActionTray';
import CountryDropdown from './components/CountryDropdown/CountryDropdown';
import { sortCurrentLocaleToTop } from './localeUtils';
import styles from './Header.less';
import UserAccount from './components/UserAccount/UserAccount';
import { AUTHENTICATED, UNAUTHENTICATED, AUTH_PENDING } from 'seek-asia-style-guide/react/private/authStatusTypes';
 import {
        Footer
      } from 'seek-asia-style-guide/jobsDB';

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
        <span key={index} className={styles.primaryNavLinkWrapper}>
          {
            linkRenderer({
              href: link.url,
              className: classnames(styles.primaryNavLink, brandStyles.primaryNavLink),
              children: <Text> {link.title}</Text>
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
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    const {
      LogoComponent,
      logoProps,
      mobileLoggedHomeUrl,
      activeTab,
      links,
      more,
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
      <div>
     <ListItem value="test"/>
     
      <Footer
        country="hk"
        language="en"
        isExpandedVersion
      />
      </div>      
        
    );
  }
}

Header.propTypes = {
  loginAvailable: PropTypes.bool,
  LogoComponent: PropTypes.func.isRequired,
  logoProps: PropTypes.object,
  activeTab: PropTypes.string,
  mobileLoggedHomeUrl: PropTypes.string,
  links: PropTypes.array,
  more: PropTypes.array,
  locales: PropTypes.array.isRequired,
  country: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  messages: PropTypes.object.isRequired,
  brandStyles: PropTypes.object.isRequired,
  actionTrayProps: PropTypes.object,
  employerSite: PropTypes.bool,
  linkRenderer: PropTypes.func,
  selectCountry: PropTypes.bool,
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
  mobileLoggedHomeUrl: '/'
};
