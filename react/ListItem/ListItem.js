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
  className,
  activeState,
  disableBackground
}) {
  return (

    <div
      className={classnames({
        [styles.className]: className,
        [styles.root]: true,
        [styles.disableBackground]: disableBackground,
        [styles.hasHoverState]: hasHoverState,
        [styles.noShadow]: noShadow,
        [styles.secondLevelPadding]: secondLevel
      })} >
      {icon && <div className={styles.listItemIcon}>{icon}</div>}
      <div>
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
            intimate={compact}
            baseline={false}
            className={classnames({
              [styles.displayInline]: true,
              [styles.activeState]: activeState
            })}
            {...descriptionProps}
            semiStrong={activeState}>
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
  descriptionProps: PropTypes.object,
  activeState: PropTypes.bool,
  disableBackground: PropTypes.bool
};

ListItem.defaultProps = {
  compact: false,
  hasHoverState: false,
  noShadow: false,
  badge: null,
  icon: null,
  secondLevel: false,
  activeState: false,
  disableBackground: false
};
