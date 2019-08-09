import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './FooterSection.less';
import { Icon, ListItem, Text, DropdownList } from 'seek-asia-style-guide/react';
import _get from 'lodash/get';
import _omit from 'lodash/omit';

const FooterLink = ({ title, iconType, mobileOnly, flexBeyondMobile }) => {
  return iconType ? (
    <ListItem
      compact
      descriptionProps={{ semiStrong: true, whistling: true }}
      disableBackground
      icon={iconType && <Icon size="small" type={iconType} className={styles.iconStyle} />}
      noShadow
      value={title}
      className={classnames(styles.iconListItemStyle, { [styles.mobileOnly]: mobileOnly, [styles.flexBeyondMobile]: flexBeyondMobile
      })}
    />
  ) : (
    <Text
      intimate
      semiStrong
      className={classnames(styles.content, {
        [styles.mobileOnly]: mobileOnly,
        [styles.flexBeyondMobile]: flexBeyondMobile
      })}>{title}</Text>
  );
};
FooterLink.propTypes = {
  iconType: PropTypes.string,
  title: PropTypes.string,
  mobileOnly: PropTypes.bool,
  flexBeyondMobile: PropTypes.bool
};
const renderItems = ({ items, hideInMobile = [], linkRenderer }) => {
  return Object.keys(items).map(key => {
    if (items[key].mobileUrl) {
      return (
        <React.Fragment key={key}>
          {
            linkRenderer({
              children: <FooterLink title={items[key].title} iconType={items[key].icon} mobileOnly={true} />,
              href: items[key].mobileUrl,
              key: `mobile${key}`
            })
          }
          {
            linkRenderer({
              children: <FooterLink title={items[key].title} iconType={items[key].icon} flexBeyondMobile={true} />,
              href: items[key].url,
              key: `desktop${key}`
            })
          }
        </React.Fragment>
      );
    }

    return (linkRenderer({
      children: <FooterLink title={items[key].title} iconType={items[key].icon} flexBeyondMobile={hideInMobile.indexOf(key) >= 0} />,
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
      <div className={sessionClass}>
        <Text semiStrong className={styles.title}>
          {_get(sessionMessage, 'title')}
        </Text>
        {
          renderItems({ items, hideInMobile, linkRenderer })
        }{
          subSessionMessage && <SubFooterSection message={subSessionMessage} linkRenderer={linkRenderer} />
        }
      </div>
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
