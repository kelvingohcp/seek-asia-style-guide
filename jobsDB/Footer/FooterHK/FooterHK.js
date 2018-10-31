import React, { Component } from 'react';
import styles from './FooterHK.less';
import PropTypes from 'prop-types';

import FooterLinks from './components/FooterLinks/FooterLinks';
import UpperFooter from './components/UpperFooter/UpperFooter';
import { Text, PageBlock, ListItem, ChevronIcon } from 'seek-asia-style-guide/react';
import { getLocalization } from './localization';
import classnames from 'classnames';

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

const makeDefaultHrefLink = baseUrl => {
  const DefaultHrefLink = ({ link }) => {
    return (`${baseUrl}${link}`);
  };

  DefaultHrefLink.PropTypes = {
    link: PropTypes.string.isRequired
  };

  return DefaultHrefLink;
};

class FooterHK extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { language, country, domainUrl, linkRenderer, hrefLink, hasCompanyProfile, isExpandedVersion, showHeaderActionTrayOffset } = this.props;
    const { isOpen } = this.state;

    const baseUrl = `https://${country}.${domainUrl}`;

    const messages = getLocalization({ language, country });

    const cfsLink = (content, link) => linkRenderer({ href: hrefLink({ link: `${messages['FooterHK.cfsLink']}${link}` }), children: content });
    const wordpressLink = (content, link) => linkRenderer({ href: hrefLink({ link: `${messages['FooterHK.cmsLink']}${link}` }), children: content });
    const externalLink = (content, link) => linkRenderer({ href: link, children: content });

    return (
      <footer className={classnames(styles.container, { [styles.headerActionTrayOffset]: showHeaderActionTrayOffset })}>
        <PageBlock>
          <div
            className={classnames({
              [styles.hidden]: isExpandedVersion ? false : !isOpen,
              [styles.upperWrapper]: true
            })}>
            <UpperFooter messages={messages} cfsLink={cfsLink} wordpressLink={wordpressLink} externalLink={externalLink} hasCompanyProfile={hasCompanyProfile} />
          </div>
          <div className={styles.lowerWrapper} >
            <div
              className={classnames({
                [styles.collapsed]: isExpandedVersion ? false : !isOpen,
                [styles.lowerWrapperLinks]: true })}>
              <FooterLinks messages={messages} baseUrl={baseUrl} cfsLink={cfsLink} wordpressLink={wordpressLink} />
              <Text whistling secondary semiStrong>
                {messages['FooterHK.copyright']}
              </Text>
            </div>
            { !isExpandedVersion &&
            <div className={styles.chevronIcon} onClick={e => this.handleClick(e)}>
              <ChevronIcon svgClassName={styles.chevronSvg} direction={isOpen ? 'up' : 'down'} />
            </div>
            }
          </div>
        </PageBlock>
      </footer>
    );
  }
}

FooterHK.defaultProps = {
  linkRenderer: makeDefaultLinkRenderer(),
  hrefLink: makeDefaultHrefLink('https://hk.jobsdb.com'),
  country: 'hk',
  language: 'en',
  domainUrl: 'jobsdb.com',
  hasCompanyProfile: true,
  isExpandedVersion: false
};

FooterHK.propTypes = {
  language: PropTypes.string,
  country: PropTypes.string,
  domainUrl: PropTypes.string,
  linkRenderer: PropTypes.func,
  hrefLink: PropTypes.func,
  hasCompanyProfile: PropTypes.bool,
  isExpandedVersion: PropTypes.bool,
  showHeaderActionTrayOffset: PropTypes.bool
};

export default FooterHK;
