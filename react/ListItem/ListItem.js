import styles from './ListItem.less';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Text from '../Text/Text';

export default function ListItem({
  title,
  value,
  icon,
  badge,
  isCompact,
  hasHoverState,
  noShadow
}) {
  return (
    <div
      className={classnames({
        [styles.root]: true,
        [styles.isCompact]: isCompact,
        [styles.hasHoverState]: hasHoverState,
        [styles.noShadow]: noShadow
      })}
    >
      {icon && <div className={classnames(styles.listItemIcon)}>{icon}</div>}
      <div className={classnames(styles.listItemBody)}>
        {title && (
          <Text
            light
            intimate
            baseline={false}
            className={classnames(styles.listItemTitle)}
          >
            {title}
          </Text>
        )}
        <div className={classnames(styles.listItemValue)}>
          <Text
            strong
            loud
            baseline={false}
            className={classnames(styles.displayInline)}
          >
            {value}
          </Text>
          {badge && (
            <span>
              {' '}
              <span className={classnames(styles.listItemBadge)}> {badge}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

ListItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.function,
  badge: PropTypes.function,
  isCompact: PropTypes.bool,
  hasHoverState: PropTypes.bool,
  noShadow: PropTypes.bool
};

ListItem.defaultProps = {
  isCompact: false,
  hasHoverState: false,
  noShadow: false
};
