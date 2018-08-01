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
  noShadow,
  secondLevel,
  descriptionProps,
  className
}) {
  return (

    <div
      className={classnames({
        [className]: className,
        [styles.root]: true,
        [styles.hasHoverState]: hasHoverState,
        [styles.noShadow]: noShadow,
        [styles.secondLevelPadding]: secondLevel
      })} >
      {icon && <div className={styles.listItemIcon}>{icon}</div>}
      <div >
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
            loud={!compact}
            waving={compact}
            baseline={false}
            className={styles.displayInline}
            {...descriptionProps}>
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
  className: PropTypes.string,
  icon: PropTypes.node,
  badge: PropTypes.object,
  compact: PropTypes.bool,
  hasHoverState: PropTypes.bool,
  noShadow: PropTypes.bool,
  secondLevel: PropTypes.bool,
  descriptionProps: PropTypes.object
};

ListItem.defaultProps = {
  compact: false,
  hasHoverState: false,
  noShadow: false,
  badge: null,
  icon: null,
  secondLevel: false
};
