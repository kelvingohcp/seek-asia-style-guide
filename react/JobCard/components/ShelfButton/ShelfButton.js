import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../Text/Text';
import Hidden from '../../../Hidden/Hidden';
import styles from './ShelfButton.less';
import classnames from 'classnames';
import ChevronIcon from '../../../ChevronIcon/ChevronIcon';
import Badge from '../../../Badge/Badge';
import { hasShelfLinks } from '../../jobCardHelper.js';
import { ShelfPropTypes } from '../ShelfSection/ShelfSectionPropTypes';

const ShelfButton = ({ isOpen, job, onClick }) => {
  return (
    <div
      className={styles.root}>
      {job.featuredLabel ? (
        <span>
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
        <Hidden mobile className={styles.moreWrapper}>
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
        </Hidden>
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
    shelf: ShelfPropTypes
  }),
  onClick: PropTypes.func,
  isOpen: PropTypes.bool
};
export default ShelfButton;
