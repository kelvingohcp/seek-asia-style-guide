import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { HomeIcon, SearchIcon, HamburgerIcon, Constants } from 'seek-asia-style-guide/react';
import styles from './ActionTray.less';

const actionTrayLink = ({ linkUrl, LinkIcon, activeTab, tabName, menuOpen, brandStyles, showFlag, handleToggleMenu, linkRenderer }) => {
  if (showFlag) {
    return activeTab === tabName ? (
      <div
        onClick={(menuOpen && activeTab === tabName) ? handleToggleMenu : undefined} // eslint-disable-line no-undefined
        className={menuOpen ? styles.menuToggle : styles.actionTrayTab}>
        <LinkIcon
          svgClassName={classnames(styles.svg, {
            [brandStyles.activeActionTrayIcon]: !menuOpen
          })}
        />
      </div>
    ) : (
      <div className={styles.actionTrayTab}>
        {
          linkRenderer({
            href: linkUrl,
            className: styles.actionTrayLink,
            children: <LinkIcon svgClassName={styles.svg} />
          })
        }
      </div>
    );
  }
  return null;
};

actionTrayLink.propTypes = {
  linkUrl: PropTypes.string,
  LinkIcon: PropTypes.func,
  activeTab: PropTypes.string,
  tabName: PropTypes.string,
  menuOpen: PropTypes.bool,
  showFlag: PropTypes.bool.isRequired,
  brandStyles: PropTypes.object.isRequired,
  handleToggleMenu: PropTypes.func,
  baseUrl: PropTypes.string.isRequired,
  linkRenderer: PropTypes.func
};

const ActionTray = ({ brandStyles, messages, handleToggleMenu, activeTab, menuOpen, showTray = true, showHome = true, showSearch = true, showMenu = true, baseUrl, linkRenderer }) => {
  const actionTrayLinkProps = {
    brandStyles,
    activeTab,
    menuOpen,
    handleToggleMenu,
    linkRenderer
  };
  const { ACTIVE_TAB_HOME, ACTIVE_TAB_SEARCH } = Constants;

  if (showTray) {
    return (
      <div className={styles.root}>
        {actionTrayLink({ showFlag: showHome, LinkIcon: HomeIcon, linkUrl: baseUrl + messages['header.homeUrl'], tabName: ACTIVE_TAB_HOME, ...actionTrayLinkProps })}
        {actionTrayLink({ showFlag: showSearch, LinkIcon: SearchIcon, linkUrl: baseUrl + messages['header.searchUrl'], tabName: ACTIVE_TAB_SEARCH, ...actionTrayLinkProps })}
        {showMenu && (
          <div onClick={handleToggleMenu} className={styles.menuToggle}>
            <HamburgerIcon svgClassName={classnames(styles.svg, { [brandStyles.activeActionTrayIcon]: menuOpen })} />
          </div>
        )}
      </div>
    );
  }
  return null;
};

ActionTray.propTypes = {
  brandStyles: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  handleToggleMenu: PropTypes.func.isRequired,
  activeTab: PropTypes.string,
  menuOpen: PropTypes.bool,
  showTray: PropTypes.bool,
  showHome: PropTypes.bool,
  showSearch: PropTypes.bool,
  showMenu: PropTypes.bool,
  baseUrl: PropTypes.string,
  linkRenderer: PropTypes.func
};

export default ActionTray;
