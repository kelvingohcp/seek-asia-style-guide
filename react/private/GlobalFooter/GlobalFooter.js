import React, { Component } from 'react';
import styles from './GlobalFooter.less';
import PropTypes from 'prop-types';
import FooterLinks from './components/FooterLinks/FooterLinks';
import UpperFooter from './components/UpperFooter/UpperFooter';
import { Hidden, Text, PageBlock, ListItem, Icon } from 'seek-asia-style-guide/react';
import classnames from 'classnames';
import smoothScroll from 'seek-asia-style-guide/react/private/smoothScroll';
import _get from 'lodash/get';

export const makeDefaultLinkRenderer = () => {
  const DefaultLinkRenderer = ({ href, children, ...props }) => (
    <a className={styles.link} href={href} {...props}>
      {React.Children.map(children, child => {
        return (child.type === ListItem) ?
          React.cloneElement(child, { noShadow: true }) : child;
      })}
    </a>
  );

  DefaultLinkRenderer.propTypes = {
    children: PropTypes.array,
    href: PropTypes.string
  };

  return DefaultLinkRenderer;
};

const currentLocale = ({ title, ItemIcon } = {}) => {
  return title ? <div className={styles.currentLocale}>
    {ItemIcon && <ItemIcon className={styles.localeIcon} />}
    <Text whispering className={styles.currentLocaleLabel}>{title}</Text>
  </div> : null;
};

currentLocale.propTypes = {
  title: PropTypes.string,
  ItemIcon: PropTypes.func
};

const pageBottom = 'pageBottom';

export default class GlobalFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handleClick() {
    const shouldOpen = !this.state.isOpen;
    this.setState({
      isOpen: shouldOpen
    });
    if (shouldOpen) {
      smoothScroll(pageBottom);
    }
  }

  render() {
    const { linkRenderer, isExpandedVersion, showHeaderActionTrayOffset, footerMessages, showCountryLanguage, locales } = this.props;
    const { isOpen } = this.state;
    const year = new Date().getFullYear();
    const shouldShowCountryLanguage = showCountryLanguage && locales[0];

    return (
      <footer className={classnames(styles.container, { [styles.headerActionTrayOffset]: showHeaderActionTrayOffset })}>
        <PageBlock>
          <div className={classnames(styles.upperWrapper, { [styles.hidden]: isExpandedVersion ? false : !isOpen })}>
            <UpperFooter footerMessages={footerMessages} linkRenderer={linkRenderer} />
            <Hidden aboveMobile>
              <FooterLinks footerMessages={footerMessages} linkRenderer={linkRenderer} />
            </Hidden>
          </div>
          <div className={styles.lowerWrapper} >
            {
              shouldShowCountryLanguage && currentLocale(locales[0])
            }
            <div className={classnames(styles.meta)}>
              <Hidden mobile>
                <FooterLinks footerMessages={footerMessages} linkRenderer={linkRenderer} className={classnames(styles.bottomMeta)} />
              </Hidden>
              <Text whispering secondary semiStrong className={styles.copyright}>
                {_get(footerMessages, 'copyright').replace('{year}', year)}
              </Text>
            </div>
            { !isExpandedVersion &&
              <div className={styles.chevronIcon} onClick={e => this.handleClick(e)}>
                <Icon type="chevron" id={pageBottom} smoothRotate rotation={isOpen ? 'reset' : '-180deg'} />
              </div>
            }
          </div>
        </PageBlock>
      </footer>
    );
  }
}

GlobalFooter.defaultProps = {
  linkRenderer: makeDefaultLinkRenderer()
};

GlobalFooter.propTypes = {
  linkRenderer: PropTypes.func,
  isExpandedVersion: PropTypes.bool,
  showHeaderActionTrayOffset: PropTypes.bool,
  showCountryLanguage: PropTypes.bool,
  footerMessages: PropTypes.object.isRequired,
  locales: PropTypes.array.isRequired
};
