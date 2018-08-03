import React from 'react';
import styles from './FooterHK.less';
import PropTypes from 'prop-types';

import FooterLinks from './components/FooterLinks/FooterLinks';
import UpperFooter from './components/UpperFooter/UpperFooter';
import { Text, PageBlock, ListItem } from 'seek-asia-style-guide/react';
import { getLocalization } from './localization';

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

const FooterHK = ({ language, country, domainUrl, linkRenderer, hrefLink }) => {
  const baseUrl = `https://${country}.${domainUrl}`;

  const messages = getLocalization({ language, country });

  const cfsLink = (content, link) => linkRenderer({ href: hrefLink({ link: `${messages['FooterHK.cfsLink']}${link}` }), children: content });
  const wordpressLink = (content, link) => linkRenderer({ href: hrefLink({ link: `${messages['FooterHK.cmsLink']}${link}` }), children: content });
  const externalLink = (content, link) => linkRenderer({ href: link, children: content });

  return (
    <footer className={styles.container}>
      <PageBlock>
        <div className={styles.upperWrapper}>
          <UpperFooter messages={messages} cfsLink={cfsLink} wordpressLink={wordpressLink} externalLink={externalLink} />
        </div>
        <div className={styles.lowerWrapper}>
          <FooterLinks messages={messages} baseUrl={baseUrl} cfsLink={cfsLink} wordpressLink={wordpressLink} />
          <Text className={styles.copyright} whistling secondary semiStrong>
            {messages['FooterHK.copyright']}
          </Text>
        </div>
      </PageBlock>
    </footer>
  );
};

FooterHK.defaultProps = {
  linkRenderer: makeDefaultLinkRenderer(),
  hrefLink: makeDefaultHrefLink('https://hk.jobsdb.com'),
  country: 'hk',
  language: 'en',
  domainUrl: 'jobsdb.com'
};

FooterHK.propTypes = {
  language: PropTypes.string,
  country: PropTypes.string,
  domainUrl: PropTypes.string,
  linkRenderer: PropTypes.func,
  hrefLink: PropTypes.func
};

export default FooterHK;
