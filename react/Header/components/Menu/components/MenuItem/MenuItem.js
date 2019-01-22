import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ListItem } from 'seek-asia-style-guide/react';
import styles from './MenuItem.less';

const interactionButton = ({ ItemIcon, children, linkUrl, linkRenderer, ...restProps }) => {
  return (
    linkRenderer({
      href: linkUrl !== '' || typeof(linkUrl) !== 'undefined' ? linkUrl : '',
      className: styles.menuText,
      children: (
        <ListItem
          value={children}
          icon={ItemIcon}
          hasHoverState
          {...restProps}
        />
      )
    })
  );
};

interactionButton.propTypes = {
  ItemIcon: PropTypes.func,
  children: PropTypes.any,
  linkUrl: PropTypes.string,
  linkRenderer: PropTypes.func
};

const MenuItem = ({ linkUrl, handleClick, children, ItemIcon, linkRenderer, className, title, ...restProps }) => {
  const interactionProps = {
    className: classnames(styles.root, className),
    children,
    ItemIcon,
    linkUrl,
    title,
    linkRenderer
  };

  if (linkUrl) {
    return interactionButton({
      ...interactionProps
    });
  } else if (handleClick) {
    return interactionButton({
      ...interactionProps,
      onClick: handleClick
    });
  }

  return (
    <ListItem
      className={styles.root}
      value={children}
      icon={ItemIcon}
      {...restProps}
    />
  );
};

MenuItem.propTypes = {
  linkUrl: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.any,
  ItemIcon: PropTypes.element,
  linkRenderer: PropTypes.func,
  className: PropTypes.string,
  title: PropTypes.string
};

export default MenuItem;
