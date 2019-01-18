import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../Text/Text';
import styles from './ShelfButton.less';
import jobCardStyles from '../../JobCard.less';
import classnames from 'classnames';
import ChevronIcon from '../../../ChevronIcon/ChevronIcon';
import Badge from '../../../Badge/Badge';
import { hasShelfLinks, ShelfSectionPropTypes } from '../../jobCardHelper.js';

const ShelfButton = ({ desktopOnly, mobileOnly, isOpen, job, onClick }) => {
  return (
    <div
      className={classnames(
        {
          [jobCardStyles.flexRow]: true,
          [jobCardStyles.section]: true,
          [jobCardStyles.desktopOnly]: desktopOnly,
          [jobCardStyles.mobileOnly]: mobileOnly
        })}>
      {job.featuredLabel ? (
        <span className={jobCardStyles.badgeWrapper}>
          <Badge color="new" label={job.featuredLabel} />
        </span>
      ) : (
        <Text
          whispering
          baseline={false}
          className={classnames(styles.shelfLinkText, job.appliedDate && styles.applyDate)}>
          {job.appliedDate || job.postingDuration}
        </Text>
      )}
      {hasShelfLinks(job.shelf && job.shelf.shelfLinks) && (
        <div className={jobCardStyles.desktopOnly}>
          <Text whispering className={styles.separatorDot} baseline={false}>•</Text>
          <Text
            whispering
            className={classnames(styles.shelfLinkText, styles.shelfToggle)}
            baseline={false}
            onClick={onClick}>
            {isOpen ? 'less' : 'more'}{' '}
            <ChevronIcon
              direction={isOpen ? 'up' : 'down'}
              svgClassName={styles.shelfToggleIcon}
            />
          </Text>
        </div>
      )}
    </div>
  );
};

ShelfButton.propTypes = {
  desktopOnly: PropTypes.bool,
  mobileOnly: PropTypes.bool,
  job: PropTypes.shape({
    featuredLabel: PropTypes.string,
    appliedDate: PropTypes.string,
    postingDuration: PropTypes.string,
    shelf: ShelfSectionPropTypes
  }),
  onClick: PropTypes.func,
  isOpen: PropTypes.bool
};
export default ShelfButton;
