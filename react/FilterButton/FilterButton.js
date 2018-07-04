import styles from './FilterButton.less';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../Button/Button';

const FilterButton = props => {
  const { className, color, isActive, ...restProps } = props;
  const isPrimary = color === 'primary';
  const isSecondary = color === 'secondary';
  return (
    <Button
      {...restProps}
      color={color}
      className={classnames(className, {
        [styles.root]: isPrimary || isSecondary,
        [styles.root_primary]: isPrimary,
        [styles.root_secondary]: isSecondary,
        [styles.isActive]: isActive
      })}
    />
  );
};

FilterButton.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  isActive: PropTypes.bool
};

export default FilterButton;
