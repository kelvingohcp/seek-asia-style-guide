import React from 'react';
import Badge from '../Badge/Badge';
import Text from '../Text/Text';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import styles from './JobCard.less';
import classnames from 'classnames';
import LocationGroup from './components/LocationGroup/LocationGroup';
import CompanyLink from './components/CompanyLink/CompanyLink';
import JobTitleLink from './components/JobTitleLink/JobTitleLink';
import IconList from './components/IconList/IconList';
import ShelfButton from './components/ShelfButton/ShelfButton';
import ShelfSection from './components/ShelfSection/ShelfSection';
import { JobCardPropTypes, JobType } from './JobCardPropTypes';

export const trackLinkType = {
  jobTitle: 'jobTitle',
  location: 'location',
  company: 'company'
};

const JobTitle = ({
  applied = false,
  TitleLinkComponent,
  viewed,
  keyword,
  job,
  trackLinkClicked
}) => {
  return (
    <div
      className={classnames({
        [styles.jobTitle]: true,
        [styles.withBookmark]: job.isSaved
      })}
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
JobTitle.propTypes = {
  applied: JobCardPropTypes.applied,
  TitleLinkComponent: JobCardPropTypes.TitleLinkComponent,
  viewed: JobCardPropTypes.viewed,
  keyword: JobCardPropTypes.keyword,
  job: JobCardPropTypes.job,
  trackLinkClicked: JobCardPropTypes.trackLinkClicked
};

const Company = ({ job, keyword, LinkComponent, trackLinkClicked }) => {
  const companyLabel = job.classifiedLabel || job.confidentialLabel;
  return (
    <Text intimate baseline={false} className={classnames(styles.text, styles.section)}>
      {companyLabel && <span className={styles.greyLabel}>{companyLabel}</span>}
      {job.company && job.company.name && <CompanyLink company={job.company} keyword={keyword} LinkComponent={LinkComponent} trackLinkClicked={trackLinkClicked} />}
    </Text>
  );
};
Company.propTypes = {
  job: JobCardPropTypes.job,
  keyword: JobCardPropTypes.keyword,
  LinkComponent: JobCardPropTypes.LinkComponent,
  trackLinkClicked: JobCardPropTypes.trackLinkClicked
};

const Description = ({ description, showDescription }) => {
  if (!(showDescription && description)) {
    return null;
  }

  return (
    <div className={styles.desktopOnly}>
      <Text
        whispering
        baseline={false}
        className={styles.text}>
        {description}
      </Text>
    </div>
  );
};
Description.propTypes = {
  description: JobType.description,
  showDescription: JobCardPropTypes.showDescription
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

const SellingPoint = ({ sellingPoints, isSplitView, showSellingPoint }) => {
  if (!showSellingPoint || isSplitView || !sellingPoints) {
    return null;
  }

  return (
    <ul className={styles.sellingPoints}>
      {sellingPoints.map((sellingPoint, i) => (
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
SellingPoint.propTypes = {
  sellingPoints: JobType.sellingPoints,
  isSplitView: JobCardPropTypes.isSplitView,
  showSellingPoint: JobCardPropTypes.showSellingPoint
};

const CompanyLogo = ({ job, showCompanyLogo }) => {
  return showCompanyLogo ?
    <img className={styles.companyLogo} src={job.companyLogoUrl} /> :
    <div className={styles.companyLogo} />;
};
CompanyLogo.propTypes = {
  job: JobCardPropTypes.job,
  showCompanyLogo: JobCardPropTypes.showCompanyLogo
};

const CompanyPic = ({ job, showCompanyPic }) => {
  if (!(showCompanyPic && job.companyPictureUrl)) {
    return null;
  }

  return (
    <div className={styles.companyPicWrapper}>
      <img
        className={styles.companyPic}
        src={job.companyPictureUrl}
      />
    </div>
  );
};
CompanyPic.propTypes = {
  job: JobCardPropTypes.job,
  showCompanyPic: JobCardPropTypes.showCompanyPic
};

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
      applied,
      borderlessRoot = false,
      isSelected,
      isSplitView,
      isVariation,
      job,
      keyword,
      LinkComponent,
      onBookmarkClick,
      showSellingPoint,
      showCompanyLogo,
      showCompanyPic,
      showDescription,
      showHighlightedBg,
      showSavedStatus,
      TitleLinkComponent,
      trackLinkClicked,
      viewed
    } = this.props;

    const { shelfSectionOpen } = this.state;

    return (
      <Card
        className={classnames(styles.container, {
          [styles.borderRoot]: !borderlessRoot,
          [styles.highlightedBg]: showHighlightedBg,
          [styles.selected]: isSelected
        })}>
        <div className={styles.leftContainer}>
          {showSavedStatus && (
            <Button className={styles.bookmarkButton} onClick={onBookmarkClick}>
              {
                job.isSaved ?
                  <Icon animation="bounce" size="small" type="bookmark" className={styles.bookmarked} /> :
                  <Icon size="small" type="bookmark" />
              }
            </Button>
          )}
          <JobTitle
            {
            ...{
              applied,
              TitleLinkComponent,
              viewed,
              keyword,
              job,
              trackLinkClicked
            }}
          />
          <Company job={job} keyword={keyword} LinkComponent={LinkComponent} trackLinkClicked={trackLinkClicked} />
          <div className={styles.flexRow}>
            <div className={styles.leftContent}>
              <Description description={job.description} showDescription={showDescription} />
              {isVariation && <MainPoint {...this.props} />}
              <SellingPoint sellingPoints={job.sellingPoints} isSplitView={isSplitView} showSellingPoint={showSellingPoint} />
              {!isVariation && <MainPoint {...this.props} />}
              <ShelfLink
                job={job}
                shelfSectionOpen={shelfSectionOpen}
                mobileOnly={isVariation && !isSplitView}
                onClick={this.handleShelfSectionToggle}
              />
            </div>
            <div className={styles.rightContent}>
              <CompanyLogo job={job} showCompanyLogo={showCompanyLogo} />
              <CompanyPic job={job} showCompanyPic={showCompanyPic} />
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
  trackLinkClicked: () => {}
};

JobCard.propTypes = JobCardPropTypes;
