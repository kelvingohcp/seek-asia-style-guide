import styles from './ListItem.less';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Text from '../Text/Text';
import Badge from '../Badge/Badge';
import Checkbox from '../Checkbox/Checkbox';

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
  disableBackground,
  checkbox,
  checked
}) {
  return (

    <div
      className={classnames({
        [className]: className,
        [styles.root]: true,
        [styles.disableBackground]: disableBackground,
        [styles.hasHoverState]: hasHoverState,
        [styles.noShadow]: noShadow,
        [styles.secondLevelListItem]: secondLevel,
        [styles.compact]: compact
      })} >
      {icon && <div className={styles.listItemIcon}>{icon}</div>}
      <div className={styles.listItemContent}>
        {title && (
          <Text
            light={true}
            intimate={compact}
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
            semiStrong={activeState}
            {...descriptionProps}>
            {value}
          </Text>
          {badge && <span className={styles.listItemBadge}><Badge {... { ...defaultBadgeProps, ...badge }} /></span>}
        </div>
      </div>
      {checkbox && <div className={styles.listItemCheckbox}><Checkbox compact checked={checked} onChange={function() {}} /></div>}
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
  disableBackground: PropTypes.bool,
  checkbox: PropTypes.bool,
  checked: PropTypes.bool
};

ListItem.defaultProps = {
  compact: false,
  hasHoverState: false,
  noShadow: false,
  badge: null,
  icon: null,
  secondLevel: false,
  activeState: false,
  disableBackground: false,
  checkbox: false
};
