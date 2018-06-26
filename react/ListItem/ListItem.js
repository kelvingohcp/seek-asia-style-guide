import styles from './ListItem.less';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Text from '../Text/Text';
import Badge from '../Badge/Badge';

const defaultBadgeProps = {
  color: 'default',
  isBold: true
};

export default function ListItem({
  title,
  value,
  icon,
  badge,
  compact,
  hasHoverState,
  noShadow
}) {
  return (
    <div
      className={classnames({
        [styles.root]: true,
        [styles.hasHoverState]: hasHoverState,
        [styles.noShadow]: noShadow
      })}>
      {icon && <div className={styles.listItemIcon}>{icon}</div>}
      <div className={styles.listItemBody}>
        {title && (
          <Text
            light={!compact}
            regular={compact}
            intimate
            baseline={false}
            className={styles.listItemTitle}>
            {title}
          </Text>
        )}
        <div className={styles.listItemValue}>
          <Text
            strong
            loud={!compact}
            waving={compact}
            baseline={false}
            className={styles.displayInline}>
            {value}
          </Text>
          {badge && <span className={styles.listItemBadge}><Badge {... { ...defaultBadgeProps, ...badge }} /></span>}
        </div>
      </div>
    </div>
  );
}

ListItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.node,
  badge: PropTypes.object,
  compact: PropTypes.bool,
  hasHoverState: PropTypes.bool,
  noShadow: PropTypes.bool
};

ListItem.defaultProps = {
  compact: false,
  hasHoverState: false,
  noShadow: false,
  badge: null,
  icon: null
};
