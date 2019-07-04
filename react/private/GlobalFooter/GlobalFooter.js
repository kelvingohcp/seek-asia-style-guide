import React, { Component } from 'react';
import styles from './GlobalFooter.less';
import PropTypes from 'prop-types';
import FooterLinks from './components/FooterLinks/FooterLinks';
import UpperFooter from './components/UpperFooter/UpperFooter';
import { Text, PageBlock, ListItem, ChevronIcon } from 'seek-asia-style-guide/react';
import classnames from 'classnames';
import smoothScroll from 'seek-asia-style-guide/react/private/smoothScroll';
import _get from 'lodash/get';

export const makeDefaultLinkRenderer = () => {
  const DefaultLinkRenderer = ({ href, children, ...props }) => (
    <a className={styles.link} href={href} {...props}>
      {React.Children.map(children, child => {
        if (child.type === ListItem) {
          return React.cloneElement(child, { noShadow: true });
        }
        return child;
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
  if (title) {
    return (
      <span className={styles.currentLocale}>
        {ItemIcon && <ItemIcon className={styles.localeIcon} />}
        <Text whispering>{title}</Text>
      </span>
    );
  }
  return null;
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
          <div
            className={classnames({
              [styles.hidden]: isExpandedVersion ? false : !isOpen,
              [styles.upperWrapper]: true
            })}>
            <UpperFooter footerMessages={footerMessages} linkRenderer={linkRenderer} />
            <FooterLinks footerMessages={footerMessages} linkRenderer={linkRenderer} />
          </div>
          <div className={styles.lowerWrapper} >
            {
              shouldShowCountryLanguage && currentLocale(locales[0])
            }
            <div
              className={classnames(shouldShowCountryLanguage ? styles.endOfLine : styles.endOfLineWithoutCountry, {
                [styles.fullWidth]: shouldShowCountryLanguage === false
              })}>
              <div
                className={classnames({
                  [styles.collapsed]: isExpandedVersion ? false : !isOpen,
                  [styles.lowerWrapperLinks]: true,
                  [styles.fullWidth]: shouldShowCountryLanguage === false
                })}>
                <FooterLinks footerMessages={footerMessages} linkRenderer={linkRenderer} displayInDesktop />
                <Text whispering secondary semiStrong>
                  {_get(footerMessages, 'copyright').replace('{year}', year)}
                </Text>
              </div>
              { !isExpandedVersion &&
              <div className={styles.chevronIcon} onClick={e => this.handleClick(e)}>
                <ChevronIcon id={pageBottom} svgClassName={styles.chevronSvg} direction={isOpen ? 'up' : 'down'} />
              </div>
              }
            </div>
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
