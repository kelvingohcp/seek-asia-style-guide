import React from 'react';
import PropTypes from 'prop-types';
import Badge from '../Badge/Badge';
import styles from './JobLabel.less';

const JobLabel = ({ applied, expired, viewed, isNewJob }) => {
  return applied || expired || viewed || isNewJob ? (
    <span className={styles.badgeWrapper}>
      {(isNewJob && <Badge label="New" color="progressing" />) ||
        (applied && <Badge label="Applied" />) ||
        (expired && <Badge label="Expired" color="expired" />) ||
        (viewed && <Badge label={viewed} color="expired" />)}
    </span>
  ) : null;
};

JobLabel.propTypes = {
  applied: PropTypes.bool,
  expired: PropTypes.bool,
  viewed: PropTypes.string,
  isNewJob: PropTypes.bool
};

export default JobLabel;
