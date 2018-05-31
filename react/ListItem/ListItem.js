import styles from './ListItem.less';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function ListItem({
  title,
  value,
  icon,
  badge
}) {
  return (
    <div className={classnames({ [styles.root]: true })} >
      {(icon) &&
        <div className={classnames(styles.listItemIcon)}>
          {icon}
        </div>
      }
      <div className={classnames(styles.listItemBody)}>
        {(title) &&
          <div className={classnames(styles.listItemTitle)} >{title}</div>
        }
        <div className={classnames(styles.listItemValue)}>
          {value}
          {!(badge === null) && badge !== '' &&
            <span>
              <span>{' '}</span>
              <span>{badge}</span>
            </span>
          }
        </div>
      </div>
    </div >
  );
}

ListItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.function,
  badge: PropTypes.function
};
