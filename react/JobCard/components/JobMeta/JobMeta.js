import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SellingPoint from '../SellingPoint/SellingPoint';
import ShelfButton from '../ShelfButton/ShelfButton';
import Description from '../Description/Description';
import { JobCardPropTypes } from '../../JobCardPropTypes';
import Hidden from '../../../Hidden/Hidden';

const JobMeta = ({
  sellingPoints,
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
      <Hidden aboveMobile>
        <Description
          description={description}
          showDescription={showDescription}
        />
      </Hidden>
      <ShelfButton
        job={job}
        onClick={onClick}
        isOpen={shelfSectionOpen}
      />
    </Fragment>
  );
};

JobMeta.propTypes = {
  sellingPoints: PropTypes.arrayOf(PropTypes.string),
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
