import React from 'react';
import PropTypes from 'prop-types';
import styles from './FooterSection.less';
import { Icon, ListItem, Section, Text, Hidden, DropdownList } from 'seek-asia-style-guide/react';
import _get from 'lodash/get';
import _omit from 'lodash/omit';

const FooterLink = ({ title, iconType }) => (
  <ListItem
    compact
    descriptionProps={{ semiStrong: true, whistling: true }}
    disableBackground
    icon={iconType && <Icon size="small" type={iconType} className={styles.content} />}
    noShadow
    value={title}
  />
);
FooterLink.propTypes = {
  iconType: PropTypes.string,
  title: PropTypes.string
};
const renderItems = ({ items, hideInMobile = [], linkRenderer }) => {
  return Object.keys(items).map(key => {
    if (items[key].mobileUrl) {
      return (
        <span key={key}>
          {
            linkRenderer({
              children: <Hidden desktop={true} tablet={true} mobile={false}>
                <FooterLink title={items[key].title} iconType={items[key].icon} />
              </Hidden>,
              href: items[key].mobileUrl,
              key: `mobile${key}`
            })
          }
          {
            linkRenderer({
              children: <Hidden mobile={true}>
                <FooterLink title={items[key].title} iconType={items[key].icon} />
              </Hidden>,
              href: items[key].url,
              key: `desktop${key}`
            })
          }
        </span>
      );
    } else if (hideInMobile.indexOf(key) >= 0) {
      return (
        linkRenderer({
          children: <Hidden mobile={true}>
            <FooterLink title={items[key].title} iconType={items[key].icon} />
          </Hidden>,
          href: items[key].url,
          key
        })
      );
    }

    return (linkRenderer({
      children: <FooterLink title={items[key].title} iconType={items[key].icon} />,
      href: items[key].url,
      key
    }));
  });
};

const SubFooterSection = ({ message, linkRenderer }) => {
  const items = _omit(message, 'title');
  if (message) {
    return (
      <DropdownList
        value={message.title}
        noShadow
        className={styles.subSectionContent}
        semiStrong
        intimate
        compact
        chevronAlignment='top'
        iconPosition="left" >
        {
          renderItems({ items, linkRenderer })
        }
      </DropdownList>
    );
  }
  return null;
};

SubFooterSection.propTypes = {
  message: PropTypes.object.isRequired,
  linkRenderer: PropTypes.func
};

const FooterSection = ({ sessionClass, sessionMessage, subSessionMessage, hideInMobile, linkRenderer }) => {
  if (sessionMessage) {
    const items = _omit(sessionMessage, 'title');
    return (
      <Section className={sessionClass}>
        <Text semiStrong className={styles.title}>
          {_get(sessionMessage, 'title')}
        </Text>
        {
          renderItems({ items, hideInMobile, linkRenderer })
        }{
          subSessionMessage && <SubFooterSection message={subSessionMessage} linkRenderer={linkRenderer} />
        }
      </Section>
    );
  }
  return null;
};
FooterSection.propTypes = {
  sessionClass: PropTypes.string.isRequired,
  sessionMessage: PropTypes.object,
  subSessionMessage: PropTypes.object,
  hideInMobile: PropTypes.array,
  linkRenderer: PropTypes.func
};

export default FooterSection;
