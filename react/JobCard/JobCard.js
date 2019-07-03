import styles from './JobCard.less';

import React, { useState } from 'react';
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
import ShelfLink from './components/ShelfLink/ShelfLink';
import JobMeta from './components/JobMeta/JobMeta';
import { JobCardPropTypes, JobType, CompanyPropTypes } from './JobCardPropTypes';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import { StyleGuideContext } from '../StyleGuideProvider/StyleGuideProvider';

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
    <Text intimate baseline={false} className={classnames(styles.text, styles.section)}>
      {company.isPrivate ?
        <span className={styles.greyLabel}>{company.name}</span> :
        <CompanyLink {...company} keyword={keyword} LinkComponent={LinkComponent} trackLinkClicked={trackLinkClicked} />
      }
    </Text>
  );
};
Company.propTypes = {
  company: PropTypes.shape(CompanyPropTypes).isRequired,
  keyword: JobCardPropTypes.keyword,
  LinkComponent: JobCardPropTypes.LinkComponent,
  trackLinkClicked: JobCardPropTypes.trackLinkClicked
};

const MainPoint = ({ job, LinkComponent, showShortenedLocation, hideSalary, trackLinkClicked }) => {
  return (
    <IconList
      list={[
        {
          content: <LocationGroup locations={job.locations} LinkComponent={LinkComponent} showShortenedLocation={showShortenedLocation} trackLinkClicked={trackLinkClicked} />,
          iconType: 'location'
        },
        { content: job.salary, iconType: 'salary', show: Boolean(job.salary && !hideSalary) }
      ]}
    />
  );
};
MainPoint.propTypes = JobCardPropTypes;

const CompanyLogo = ({ companyLogoUrl, showCompanyLogo }) => {
  return companyLogoUrl && showCompanyLogo ?
    <img
      className={styles.companyLogo}
      src={companyLogoUrl}
    /> :
    <div className={styles.companyLogo} />;
};
CompanyLogo.propTypes = {
  companyLogoUrl: JobType.companyLogoUrl,
  showCompanyLogo: JobCardPropTypes.showCompanyLogo
};

const JobCard = props => {
  const [shelfSectionOpen, setShelfSectionOpen] = useState(false);

  const handleShelfSectionToggle = e => {
    setShelfSectionOpen(!shelfSectionOpen);
    e.stopPropagation();
  };

  const {
    applied,
    borderlessRoot = false,
    isSelected,
    isSplitView,
    enableBrandedAd,
    job = {},
    keyword,
    LinkComponent,
    onBookmarkClick,
    showSellingPoint,
    showCompanyLogo,
    showDescription,
    showHighlightedBg,
    showSavedStatus,
    TitleLinkComponent,
    trackLinkClicked,
    viewed,
    viewedDate,
    tenant,
    isIntersecting
  } = props;

  const { companyMeta = {}, isSaved, bannerUrl, sellingPoints, description, isExpired } = job;

  const { logoUrl } = _get(job, 'companyMeta', {});

  const brandedStripeStyle = {
    jobsdb: styles.sideHighlightBorderJobsdb,
    jobstreet: styles.sideHighlightBorderJobstreet
  }[tenant.toLowerCase()];

  const JobMetaComponent = () => (
    <JobMeta
      sellingPoints={sellingPoints}
      isSplitView={isSplitView}
      showSellingPoint={showSellingPoint}
      description={description}
      showDescription={showDescription}
      job={job} shelfSectionOpen={shelfSectionOpen}
      onClick={handleShelfSectionToggle}
      applied={applied}
      expired={isExpired}
      viewed={viewed && viewedDate && `Viewed ${viewedDate}`}
    />
  );

  return (
    <div
      className={classnames(styles.container, {
        [styles.borderRoot]: !borderlessRoot,
        [styles.highlightedBg]: showHighlightedBg,
        [styles.selected]: isSelected,
        [brandedStripeStyle]: enableBrandedAd && brandedStripeStyle
      })}>
      <div className={styles.leftContainer}>
        {showSavedStatus && (
          <Button className={styles.bookmarkButton} onClick={onBookmarkClick}>
            <Icon size="normal" type="bookmark" className={isSaved ? styles.bookmarked : ''} animation={isSaved ? 'bounce' : ''} />
          </Button>
        )}
        {
          !isSplitView && (
            <Hidden aboveMobile className={styles.alignCenter}>
              <CompanyBanner isIntersecting={isIntersecting} bannerUrl={bannerUrl} enableBrandedAd={enableBrandedAd} isMobile />
            </Hidden>
          )
        }
        <JobTitle
          {
          ...{
            applied,
            TitleLinkComponent,
            viewed,
            keyword,
            job,
            trackLinkClicked,
            showSavedStatus
          }}
        />
        <Company company={companyMeta} keyword={keyword} LinkComponent={LinkComponent} trackLinkClicked={trackLinkClicked} />
        <div className={classnames(styles.flexRow, styles.flexRowHeight)}>
          <div className={styles.leftContent}>
            <MainPoint {...props} />
            <Hidden mobile>
              <JobMetaComponent />
            </Hidden>
          </div>
          <div
            className={
              classnames(
                {
                  [styles.rightContent]: !(enableBrandedAd && !isSplitView),
                  [styles.rightContentWithBanner]: enableBrandedAd && !isSplitView
                }
              )
            }>
            <CompanyLogo companyLogoUrl={logoUrl} showCompanyLogo={showCompanyLogo} />
            {!isSplitView &&
            <ShelfLink
              job={job}
              shelfSectionOpen={shelfSectionOpen}
              desktopOnly
              onClick={handleShelfSectionToggle}
            />}
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
      {
        !isSplitView &&
        <Hidden mobile className={styles.rightContainer}>
          <CompanyBanner isIntersecting={props.isIntersecting} bannerUrl={job.bannerUrl} enableBrandedAd={enableBrandedAd} />
          <IconList
            className={styles.structuredData}
            list={[
              { content: job.careerLevelName, iconType: 'careerLevel' },
              { content: job.workExperienceName, iconType: 'experience' },
              { content: job.qualificationName, iconType: 'education' },
              { content: job.employmentTermName, iconType: 'employmentType' }
            ]}
          />
        </Hidden>
      }
    </div>
  );
};

export default props => (
  <StyleGuideContext.Consumer>
    {({ tenant = '' }) => {
      return <JobCard {...props} tenant={tenant} />;
    }}
  </StyleGuideContext.Consumer>
);

JobCard.defaultProps = {
  trackLinkClicked: () => { },
  tenant: ''
};

JobCard.propTypes = JobCardPropTypes;

export { JobCard as JobCardForTest };
