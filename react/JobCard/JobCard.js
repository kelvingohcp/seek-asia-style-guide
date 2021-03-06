import styles from './JobCard.less';

import React, { memo, useState } from 'react';
import classnames from 'classnames';

import Text from '../Text/Text';
import Hidden from '../Hidden/Hidden';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import LocationGroup from './components/LocationGroup/LocationGroup';
import CompanyLink from './components/CompanyLink/CompanyLink';
import JobTitleLink from './components/JobTitleLink/JobTitleLink';
import IconList from './components/IconList/IconList';
import ShelfSection from './components/ShelfSection/ShelfSection';
import CompanyBanner from './components/CompanyBanner/CompanyBanner';
import JobMeta from './components/JobMeta/JobMeta';
import {
  JobCardPropTypes,
  JobType,
  CompanyPropTypes
} from './JobCardPropTypes';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import { StyleGuideContext } from '../StyleGuideProvider/StyleGuideProvider';
import JobLabel from '../JobLabel/JobLabel';

export const trackLinkType = {
  jobTitle: 'jobTitle',
  location: 'location',
  company: 'company'
};

const JobTitle = ({
  TitleLinkComponent,
  viewed,
  keyword,
  job,
  trackLinkClicked,
  showSavedStatus
}) => {
  return (
    <div
      className={classnames({
        [styles.jobTitle]: true,
        [styles.withBookmark]: showSavedStatus
      })}
      data-automation="job-title">
      <JobTitleLink
        LinkComponent={TitleLinkComponent}
        viewed={viewed}
        trackLinkClicked={trackLinkClicked}
        keyword={keyword}
        job={job}
      />
    </div>
  );
};

JobTitle.propTypes = {
  TitleLinkComponent: PropTypes.func,
  viewed: JobCardPropTypes.viewed,
  keyword: JobCardPropTypes.keyword,
  job: JobCardPropTypes.job,
  trackLinkClicked: JobCardPropTypes.trackLinkClicked,
  showSavedStatus: JobCardPropTypes.showSavedStatus
};

const Company = ({ company, keyword, LinkComponent, trackLinkClicked }) => {
  return (
    <Text
      intimate
      baseline={false}
      className={classnames(styles.text, styles.section)}>
      {company.isPrivate ? (
        <span className={styles.greyLabel}>{company.name}</span>
      ) : (
        <CompanyLink
          {...company}
          keyword={keyword}
          LinkComponent={LinkComponent}
          trackLinkClicked={trackLinkClicked}
        />
      )}
    </Text>
  );
};
Company.propTypes = {
  company: PropTypes.shape(CompanyPropTypes).isRequired,
  keyword: JobCardPropTypes.keyword,
  LinkComponent: JobCardPropTypes.LinkComponent,
  trackLinkClicked: JobCardPropTypes.trackLinkClicked
};

const MainPoint = ({
  job,
  LinkComponent,
  showShortenedLocation,
  hideSalary,
  trackLinkClicked
}) => {
  return (
    <IconList
      list={[
        {
          content: (
            <LocationGroup
              locations={job.locations}
              LinkComponent={LinkComponent}
              showShortenedLocation={showShortenedLocation}
              trackLinkClicked={trackLinkClicked}
            />
          ),
          iconType: 'location'
        },
        {
          content: job.salary,
          iconType: 'salary',
          show: Boolean(job.salary && !hideSalary)
        }
      ]}
    />
  );
};
MainPoint.propTypes = JobCardPropTypes;

const CompanyLogo = ({ companyLogoUrl, showCompanyLogo }) => {
  return companyLogoUrl && showCompanyLogo ? (
    <img className={styles.companyLogo} src={companyLogoUrl} />
  ) : (
    <div className={styles.companyLogo} />
  );
};
CompanyLogo.propTypes = {
  companyLogoUrl: JobType.companyLogoUrl,
  showCompanyLogo: JobCardPropTypes.showCompanyLogo
};

const JobCard = memo(props => {
  const [shelfSectionOpen, setShelfSectionOpen] = useState(false);

  const handleShelfSectionToggle = e => {
    setShelfSectionOpen(!shelfSectionOpen);
    e.stopPropagation();
  };

  const {
    applied,
    borderlessRoot = false,
    enableBrandedAd,
    job = {},
    keyword,
    LinkComponent,
    onBookmarkClick,
    showSellingPoint,
    showCompanyLogo,
    showDescription,
    showSavedStatus,
    TitleLinkComponent,
    trackLinkClicked,
    viewed,
    viewedDate,
    isNewJob,
    tenant
  } = props;

  const {
    companyMeta = {},
    isSaved,
    bannerUrl,
    sellingPoints,
    description,
    isExpired
  } = job;

  const { logoUrl } = _get(job, 'companyMeta', {});

  const brandedStripeStyle = {
    jobsdb: styles.sideHighlightBorderJobsdb,
    jobstreet: styles.sideHighlightBorderJobstreet
  }[tenant.toLowerCase()];

  const JobMetaComponent = () => (
    <JobMeta
      sellingPoints={sellingPoints}
      showSellingPoint={showSellingPoint}
      description={description}
      showDescription={showDescription}
      job={job}
      shelfSectionOpen={shelfSectionOpen}
      onClick={handleShelfSectionToggle}
    />
  );

  return (
    <div
      className={classnames(styles.container, {
        [styles.borderRoot]: !borderlessRoot,
        [brandedStripeStyle]: enableBrandedAd && brandedStripeStyle
      })}>
      <div className={styles.leftContainer}>
        {showSavedStatus && (
          <Button className={styles.bookmarkButton} onClick={onBookmarkClick}>
            <Icon
              size="normal"
              type="bookmark"
              className={isSaved ? styles.bookmarked : ''}
              animation={isSaved ? 'bounce' : ''}
            />
          </Button>
        )}
        <Hidden aboveMobile className={styles.alignCenter}>
          <CompanyBanner
            bannerUrl={bannerUrl}
            enableBrandedAd={enableBrandedAd}
            isMobile
          />
        </Hidden>
        <JobLabel
          applied={applied}
          expired={isExpired}
          viewed={viewed && viewedDate ? `Viewed ${viewedDate}` : ''}
          isNewJob={isNewJob}
        />
        <JobTitle
          {...{
            applied,
            TitleLinkComponent,
            viewed,
            keyword,
            job,
            trackLinkClicked,
            showSavedStatus
          }}
        />
        <Company
          company={companyMeta}
          keyword={keyword}
          LinkComponent={LinkComponent}
          trackLinkClicked={trackLinkClicked}
        />
        <div className={classnames(styles.flexRow, styles.flexRowHeight)}>
          <div className={styles.leftContent}>
            <MainPoint {...props} />
            <Hidden mobile>
              <JobMetaComponent />
            </Hidden>
          </div>
          <div>
            <CompanyLogo
              companyLogoUrl={logoUrl}
              showCompanyLogo={showCompanyLogo}
            />
          </div>
        </div>
        <Hidden aboveMobile>
          <JobMetaComponent />
        </Hidden>
        <ShelfSection
          shelf={job.shelf}
          LinkComponent={LinkComponent}
          showShelfSection={shelfSectionOpen}
          trackLinkClicked={trackLinkClicked}
        />
      </div>
    </div>
  );
});

export default props => (
  <StyleGuideContext.Consumer>
    {({ tenant = '' }) => {
      return <JobCard {...props} tenant={tenant} />;
    }}
  </StyleGuideContext.Consumer>
);

JobCard.defaultProps = {
  trackLinkClicked: () => {},
  tenant: ''
};

JobCard.propTypes = JobCardPropTypes;

export { JobCard as JobCardForTest };
