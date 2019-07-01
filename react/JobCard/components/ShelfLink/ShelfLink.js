import React from 'react';
import PropTypes from 'prop-types';
import ShelfButton from '../ShelfButton/ShelfButton';
import { JobCardPropTypes } from '../../JobCardPropTypes';

export const ShelfLink = ({ mobileOnly, desktopOnly, job, shelfSectionOpen, onClick }) => {
  return (
    <ShelfButton
      mobileOnly={mobileOnly}
      desktopOnly={desktopOnly}
      job={job}
      onClick={onClick}
      isOpen={shelfSectionOpen}
    />
  );
};

ShelfLink.propTypes = {
  desktopOnly: PropTypes.bool,
  mobileOnly: PropTypes.bool,
  job: JobCardPropTypes.job,
  shelfSectionOpen: PropTypes.bool,
  onClick: PropTypes.func
};

export default ShelfLink;
