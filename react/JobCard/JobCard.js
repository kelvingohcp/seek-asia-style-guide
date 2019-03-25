import React from 'react';
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
import { JobCardPropTypes, JobType, CompanyPropTypes } from './JobCardPropTypes';
import JobLabel from './components/JobLabel/JobLabel';
import PropTypes from 'prop-types';

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
  TitleLinkComponent: JobCardPropTypes.TitleLinkComponent,
  viewed: JobCardPropTypes.viewed,
  keyword: JobCardPropTypes.keyword,
  job: JobCardPropTypes.job,
  trackLinkClicked: JobCardPropTypes.trackLinkClicked,
  showSavedStatus: JobCardPropTypes.showSavedStatus
};

const Company = ({ company, keyword, LinkComponent, trackLinkClicked }) => {
  return (
    <Text intimate baseline={false} className={classnames(styles.text, styles.section)}>
      { company.isPrivate ?
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

const SellingPoint = ({ sellingPoints, isSplitView, showSellingPoint, enableBrandedAd }) => {
  if (!showSellingPoint || (isSplitView && !enableBrandedAd) || !sellingPoints) {
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
  showSellingPoint: JobCardPropTypes.showSellingPoint,
  enableBrandedAd: JobCardPropTypes.enableBrandedAd
};

const CompanyLogo = ({ companyLogoUrl, showCompanyLogo }) => {
  return companyLogoUrl && showCompanyLogo ?
    <img className={styles.companyLogo} src={companyLogoUrl} /> :
    <div className={styles.companyLogo} />;
};
CompanyLogo.propTypes = {
  companyLogoUrl: JobType.companyLogoUrl,
  showCompanyLogo: JobCardPropTypes.showCompanyLogo
};

const CompanyBanner = ({ bannerUrl, enableBrandedAd, isVariation }) => {
  return enableBrandedAd && bannerUrl ?
    <img
      className={
        classnames({
          [styles.companyBannerOnMobile]: !isVariation,
          [styles.companyBannerOnDesktop]: isVariation
        })
      }
      src={bannerUrl}
    /> : null;
};
CompanyBanner.propTypes = {
  bannerUrl: JobType.bannerUrl,
  enableBrandedAd: JobCardPropTypes.enableBrandedAd,
  isVariation: JobCardPropTypes.isVariation
};

const CompanyPic = ({ companyPictureUrl, showCompanyPic }) => {
  if (!(showCompanyPic && companyPictureUrl)) {
    return null;
  }

  return (
    <div className={styles.companyPicWrapper}>
      <img
        className={styles.companyPic}
        src={companyPictureUrl}
      />
    </div>
  );
};
CompanyPic.propTypes = {
  companyPictureUrl: JobType.companyPictureUrl,
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
      enableBrandedAd,
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
      viewed,
      viewedDate
    } = this.props;

    const { shelfSectionOpen } = this.state;

    return (
      <Card
        className={classnames(styles.container, {
          [styles.borderRoot]: !borderlessRoot,
          [styles.highlightedBg]: showHighlightedBg,
          [styles.selected]: isSelected,
          [styles.sideHighlightBorder]: enableBrandedAd
        })}>
        <div className={styles.leftContainer}>
          {showSavedStatus && (
            <Button className={styles.bookmarkButton} onClick={onBookmarkClick}>
              <Icon size="normal" type="bookmark" className={job.isSaved ? styles.bookmarked : ''} animation={job.isSaved ? 'bounce' : ''} />
            </Button>
          )}
          <CompanyBanner bannerUrl={job.bannerUrl} enableBrandedAd={enableBrandedAd} />
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
          <Company company={job.company} keyword={keyword} LinkComponent={LinkComponent} trackLinkClicked={trackLinkClicked} />
          <div className={styles.flexRow}>
            <div className={styles.leftContent}>
              <Description description={job.description} showDescription={showDescription} />
              {isVariation && <MainPoint {...this.props} />}
              <SellingPoint sellingPoints={job.sellingPoints} isSplitView={isSplitView} showSellingPoint={showSellingPoint} enableBrandedAd={enableBrandedAd} />
              {!isVariation && <MainPoint {...this.props} />}
              <ShelfLink
                job={job}
                shelfSectionOpen={shelfSectionOpen}
                mobileOnly={isVariation && !isSplitView}
                onClick={this.handleShelfSectionToggle}
              />
            </div>
            <div
              className={
                classnames(
                  {
                    [styles.rightContent]: !(enableBrandedAd && isVariation && !isSplitView),
                    [styles.rightContentWithBanner]: enableBrandedAd && isVariation && !isSplitView
                  }
                )
              }>
              <CompanyLogo companyLogoUrl={job.companyLogoUrl} showCompanyLogo={showCompanyLogo} />
              <CompanyPic companyPictureUrl={job.companyPictureUrl} showCompanyPic={showCompanyPic} />
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

          <JobLabel applied={applied} expired={job.isExpired} viewed={viewed && viewedDate && `Viewed ${viewedDate}`} />
        </div>
        {
          isVariation && !isSplitView &&
          <div className={styles.rightContainer}>
            <CompanyBanner bannerUrl={job.bannerUrl} enableBrandedAd={enableBrandedAd} isVariation={isVariation} />
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
