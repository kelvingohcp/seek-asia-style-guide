import React from 'react';
import Badge from '../Badge/Badge';
import Text from '../Text/Text';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import styles from './JobCard.less';
import classnames from 'classnames';
import Constants from '../Constants/Constants';
import { jobAdTypeOption, BOOKMARKED } from './jobCardHelper.js';
import LocationGroup from './components/LocationGroup/LocationGroup';
import CompanyLink from './components/CompanyLink/CompanyLink';
import JobTitleLink from './components/JobTitleLink/JobTitleLink';
import IconList from './components/IconList/IconList';
import ShelfButton from './components/ShelfButton/ShelfButton';
import ShelfSection from './components/ShelfSection/ShelfSection';
import { JobCardPropTypes } from './JobCardPropTypes';

export const trackLinkType = {
  jobTitle: 'jobTitle',
  location: 'location',
  company: 'company'
};

export const JobTitle = ({ applied = false, bookmarked, TitleLinkComponent, viewed, keyword, job, trackLinkClicked }) => {
  return (
    <div
      className={classnames(styles.jobTitle, bookmarked && styles.withBookmark)}
      data-automation="job-title">
      {(applied || job.isExpired) && (
        <span className={styles.badgeWrapper}>
          {
            applied ?
              (<Badge label="Applied" />) :
              (<Badge label="Expired" color="expired" />)
          }
        </span>
      )}
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
JobTitle.propTypes = JobCardPropTypes;

export const Company = ({ job, keyword, LinkComponent, trackLinkClicked }) => {
  const companyLabel = job.classifiedLabel || job.confidentialLabel;
  return (
    <Text intimate baseline={false} className={classnames(styles.text, styles.section)}>
      {companyLabel && <span className={styles.greyLabel}>{companyLabel}</span>}
      {job.company && job.company.name && <CompanyLink company={job.company} keyword={keyword} LinkComponent={LinkComponent} trackLinkClicked={trackLinkClicked} />}
    </Text>
  );
};
Company.propTypes = JobCardPropTypes;

export const Description = ({ job, jobAdType }) => {
  return jobAdTypeOption[jobAdType].showDescription && job.description && (
    <div className={styles.desktopOnly}>
      <Text
        whispering
        baseline={false}
        className={styles.text}>
        {job.description}
      </Text>
    </div>
  );
};
Description.propTypes = JobCardPropTypes;

export const MainPoint = ({ job, LinkComponent, showShortenedLocation, hideSalary, trackLinkClicked }) => {
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

export const SellingPoint = ({ jobAdType, job, isSplitView }) => {
  return jobAdTypeOption[jobAdType].showSellingPoint && !isSplitView && job.sellingPoints && (
    <ul className={styles.sellingPoints}>
      {job.sellingPoints.map((sellingPoint, i) => (
        <li key={i} className={styles.sellingPoint}>
          <Text
            whispering
            baseline={false}
            className={styles.text}>
            {sellingPoint}
          </Text>
        </li>
      ))}
    </ul>
  );
};
SellingPoint.propTypes = JobCardPropTypes;

export const CompanyLogo = ({ jobAdType, job }) => {
  return jobAdTypeOption[jobAdType].showCompanyLogo ?
    <img className={styles.companyLogo} src={job.companyLogoUrl} /> :
    <div className={styles.companyLogo} />;
};
CompanyLogo.propTypes = JobCardPropTypes;

export const CompanyPic = ({ jobAdType, job }) => {
  return jobAdTypeOption[jobAdType].showCompanyPic && job.companyPictureUrl && (
    <div className={styles.companyPicWrapper}>
      <img
        className={styles.companyPic}
        src={job.companyPictureUrl}
      />
    </div>
  );
};
CompanyPic.propTypes = JobCardPropTypes;

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
ShelfLink.propTypes = JobCardPropTypes;
export default class JobCard extends React.Component {
  state = {
    shelfSectionOpen: false
  }

  handleShelfSectionToggle = e => {
    this.setState({ shelfSectionOpen: !this.state.shelfSectionOpen });
    e.stopPropagation();
  };

  render() {
    const {
      job,
      jobAdType,
      isSelected,
      bookmarked,
      onBookmarkClick,
      trackLinkClicked,
      LinkComponent,
      borderlessRoot = false,
      isVariation,
      isSplitView
    } = this.props;
    const { shelfSectionOpen } = this.state;
    const { showHighlightedBg } = jobAdTypeOption[jobAdType];
    return (
      <Card
        className={classnames(styles.container, {
          [styles.borderRoot]: !borderlessRoot,
          [styles.highlightedBg]: showHighlightedBg,
          [styles.selected]: isSelected
        })}>
        <div className={styles.leftContainer}>
          {bookmarked && (
            <Button className={styles.bookmarkButton} onClick={onBookmarkClick}>
              {
                bookmarked === BOOKMARKED ?
                  (<Icon animation="bounce" size="small" type="bookmark" className={styles.bookmarked} />) :
                  (<Icon size="small" type="bookmark" />)
              }
            </Button>
          )}
          <JobTitle {...this.props} />
          <Company {...this.props} />
          <div className={styles.flexRow}>
            <div className={styles.leftContent}>
              <Description {...this.props} />
              {isVariation && <MainPoint {...this.props} />}
              <SellingPoint {...this.props} />
              {!isVariation && <MainPoint {...this.props} />}
              <ShelfLink
                job={job}
                shelfSectionOpen={shelfSectionOpen}
                mobileOnly={isVariation && !isSplitView}
                onClick={this.handleShelfSectionToggle}
              />
            </div>
            <div className={styles.rightContent}>
              <CompanyLogo {...this.props} />
              <CompanyPic {...this.props} />
              {isVariation && !isSplitView &&
                <ShelfLink
                  job={job}
                  shelfSectionOpen={shelfSectionOpen}
                  desktopOnly
                  onClick={this.handleShelfSectionToggle}
                />}
            </div>
          </div>
          <ShelfSection
            shelf={job.shelf}
            LinkComponent={LinkComponent}
            showShelfSection={shelfSectionOpen}
            trackLinkClicked={trackLinkClicked}
          />
        </div>
        {
          isVariation && !isSplitView &&
          <div className={styles.rightContainer}>
            <IconList
              className={styles.structuredData}
              list={[
                { content: job.careerLevel, iconType: 'careerLevel' },
                { content: job.workExperience, iconType: 'experience' },
                { content: job.qualification, iconType: 'education' },
                { content: job.employmentTerm, iconType: 'employmentType' }
              ]}
            />
          </div>
        }
      </Card>
    );
  }
}

JobCard.defaultProps = {
  trackLinkClicked: () => {},
  jobAdType: Constants.JOBADTYPE_JOBSDB_DEFAULT
};

JobCard.propTypes = JobCardPropTypes;
