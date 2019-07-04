import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import JobLabel from '../../../JobLabel/JobLabel';
import SellingPoint from '../SellingPoint/SellingPoint';
import ShelfLink from '../ShelfLink/ShelfLink';
import Description from '../Description/Description';
import { JobCardPropTypes } from '../../JobCardPropTypes';

const JobMeta = ({ sellingPoints, isSplitView, showSellingPoint, description, showDescription, job, shelfSectionOpen, onClick, applied, expired, viewed }) => {
  return (
    <Fragment>
      <SellingPoint sellingPoints={sellingPoints} showSellingPoint={showSellingPoint} />
      {!isSplitView && <Description description={description} showDescription={showDescription} />}
      <ShelfLink
        job={job}
        shelfSectionOpen={shelfSectionOpen}
        mobileOnly={!isSplitView}
        onClick={onClick}
      />
      <JobLabel applied={applied} expired={expired} viewed={viewed} />
    </Fragment>);
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
  applied: PropTypes.bool,
  expired: PropTypes.bool,
  viewed: PropTypes.bool,
  isMobile: PropTypes.bool
};

export default JobMeta;
