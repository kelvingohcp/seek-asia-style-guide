import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Icon, Constants } from 'seek-asia-style-guide/react';
import styles from './ActionTray.less';

const actionTrayLink = ({ linkUrl, activeTab, tabName, menuOpen, brandStyles, showFlag, handleToggleMenu, linkRenderer, title, iconName }) => {
  if (showFlag) {
    return activeTab === tabName ? (
      <div
        onClick={menuOpen ? handleToggleMenu : undefined} // eslint-disable-line no-undefined
        className={menuOpen ? styles.menuToggle : styles.actionTrayTab}>
        <Icon
          title={title}
          type={iconName}
          className={classnames(styles.svg, {
            [brandStyles.activeActionTrayIcon]: !menuOpen
          })}
          size="normal"
        />
      </div>
    ) : (
      <div className={styles.actionTrayTab}>
        {
          linkRenderer({
            href: linkUrl,
            className: styles.actionTrayLink,
            children: <Icon title={title} type={iconName} svgClassName={styles.svg} size="normal" />
          })
        }
      </div>
    );
  }
  return null;
};

actionTrayLink.propTypes = {
  linkUrl: PropTypes.string,
  activeTab: PropTypes.string,
  tabName: PropTypes.string,
  menuOpen: PropTypes.bool,
  showFlag: PropTypes.bool.isRequired,
  brandStyles: PropTypes.object.isRequired,
  handleToggleMenu: PropTypes.func,
  baseUrl: PropTypes.string.isRequired,
  linkRenderer: PropTypes.func,
  title: PropTypes.string,
  iconName: PropTypes.string
};

const ActionTray = ({ brandStyles, messages, handleToggleMenu, activeTab, menuOpen, showTray = true, showHome = true, showSearch = true, showMenu = true, baseUrl, country, linkRenderer }) => {
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
        {actionTrayLink({ showFlag: showHome, iconName: 'home', linkUrl: baseUrl + messages['header.homeUrl'], tabName: ACTIVE_TAB_HOME, ...actionTrayLinkProps })}
        { country === 'hk' ?
          actionTrayLink({ showFlag: showSearch, iconName: 'search', linkUrl: baseUrl + messages['header.searchUrl'], title: 'Search HK Jobs', tabName: ACTIVE_TAB_SEARCH, ...actionTrayLinkProps }) :
          actionTrayLink({ showFlag: showSearch, iconName: 'search', linkUrl: baseUrl + messages['header.searchUrl'], tabName: ACTIVE_TAB_SEARCH, ...actionTrayLinkProps })
        }
        {showMenu && (
          <div onClick={handleToggleMenu} className={styles.menuToggle}>
            <Icon type="menu" className={classnames(styles.svg, { [brandStyles.activeActionTrayIcon]: menuOpen })} size="normal" />
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
  linkRenderer: PropTypes.func,
  country: PropTypes.string
};

export default ActionTray;
