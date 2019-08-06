import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SellingPoint from '../SellingPoint/SellingPoint';
import ShelfLink from '../ShelfLink/ShelfLink';
import Description from '../Description/Description';
import { JobCardPropTypes } from '../../JobCardPropTypes';

const JobMeta = ({
  sellingPoints,
  isSplitView,
  showSellingPoint,
  description,
  showDescription,
  job,
  shelfSectionOpen,
  onClick
}) => {
  return (
    <Fragment>
      <SellingPoint
        sellingPoints={sellingPoints}
        showSellingPoint={showSellingPoint}
      />
      {!isSplitView && (
        <Description
          description={description}
          showDescription={showDescription}
        />
      )}
      <ShelfLink
        job={job}
        shelfSectionOpen={shelfSectionOpen}
        mobileOnly={!isSplitView}
        onClick={onClick}
      />
    </Fragment>
  );
};

JobMeta.propTypes = {
  sellingPoints: PropTypes.arrayOf(PropTypes.string),
  isSplitView: PropTypes.bool,
  showSellingPoint: PropTypes.bool,
  bannerUrl: PropTypes.string,
  description: PropTypes.string,
  showDescription: PropTypes.bool,
  job: JobCardPropTypes.job,
  shelfSectionOpen: PropTypes.bool,
  onClick: PropTypes.func,
  isMobile: PropTypes.bool
};

export default JobMeta;
