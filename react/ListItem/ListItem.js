import styles from './ListItem.less';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function ListItem({
  title,
  value,
  icon,
  badge,
  ...restProps
}) {
  
  return (
  
    <div className={classnames(styles.listItem)}>
      {icon != null && icon != '' &&
        <div className={classnames(styles.listItemIcon)}>
          {icon}
        </div>
      }
      <div className={classnames(styles.listItemValue)}>
        {title != null && title != '' &&
          <div className={classnames(styles.listItemTitle)} >{title}</div>
        }
        {value}
      </div>
    </div>
  );
}

ListItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.function,
  badge: PropTypes.function
};


