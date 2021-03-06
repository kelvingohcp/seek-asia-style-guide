import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Text from '../../../Text/Text';
import Icon from '../../../Icon/Icon';
import styles from './IconList.less';
import classnames from 'classnames';

const IconList = ({ list, className }) => {
  return (
    <Fragment>
      {
        list.filter(({ show = true }) => show).map(({ iconType, content }, i) => (
          <div
            key={i}
            className={classnames({
              [styles.container]: true,
              [className]: className
            })}>
            <div className={styles.iconWrapper}>
              <Icon type={iconType} className={styles.icon} size="small" />
            </div>
            <Text key={i} whispering baseline={false} className={styles.textWrapper}>
              {content || 'Not specified'}
            </Text>
          </div>
        ))
      }
    </Fragment>
  );
};

IconList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    show: PropTypes.bool,
    iconType: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
  })),
  className: PropTypes.string
};
export default IconList;
