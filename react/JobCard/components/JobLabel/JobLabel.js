import React from 'react';
import PropTypes from 'prop-types';
import Badge from '../../../Badge/Badge';
import styles from './JobLabel.less';

const JobLabel = ({ applied, expired, viewed }) => {
  return applied || expired || viewed ? (
    <span className={styles.badgeWrapper}>
      {(applied && <Badge label="Applied" />) ||
        (expired && <Badge label="Expired" color="expired" />) ||
        (viewed && <Badge label={viewed} color="expired" />)}
    </span>
  ) : null;
};

JobLabel.propTypes = {
  applied: PropTypes.bool,
  expired: PropTypes.bool,
  viewed: PropTypes.string
};

export default JobLabel;
