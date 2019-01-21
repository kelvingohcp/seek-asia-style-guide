import React from 'react';
import PropTypes from 'prop-types';

import Badge from '../Badge/Badge';
import Text from '../Text/Text';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import styles from './JobCard.less';
import classnames from 'classnames';
import { getJobAdTypeOption, BOOKMARKED, NOT_BOOKMARKED, ShelfSectionPropTypes } from './jobCardHelper.js';
import LocationGroup, {
  LocationsPropTypes
} from './components/LocationGroup/LocationGroup';
import CompanyLink, {
  CompanyLinkPropTypes
} from './components/CompanyLink/CompanyLink';
import JobTitleLink from './components/JobTitleLink/JobTitleLink';
import IconList from './components/IconList/IconList';
import ShelfButton from './components/ShelfButton/ShelfButton';
import ShelfSection from './components/ShelfSection/ShelfSection';

export default class JobCard extends React.Component {
  state = {
    shelfSectionOpen: false
  }

  RenderJobTitle = () => {
    const { applied = false, bookmarked, TitleLinkComponent, viewed, keyword, job } = this.props;
    return (
      <div className={classnames(styles.jobTitle, bookmarked && styles.withBookmark)}>
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
          keyword={keyword}
          job={job}
        />
      </div>
    );
  }

  RenderCompany = () => {
    const { job, keyword, LinkComponent } = this.props;
    const companyLabel = job.classifiedLabel || job.confidentialLabel;
    return (
      <Text intimate baseline={false} className={classnames(styles.text, styles.section)}>
        {companyLabel && <span className={styles.greyLabel}>{companyLabel}</span>}
        {job.company && job.company.name && <CompanyLink company={job.company} keyword={keyword} LinkComponent={LinkComponent} />}
      </Text>
    );
  }

  RenderDescription = ({ jobAdTypeOption }) => {
    const { job } = this.props;
    return jobAdTypeOption.showDescription && job.description && (
      <div className={styles.desktopOnly}>
        <Text
          whispering
          baseline={false}
          className={styles.text}>
          {job.description}
        </Text>
      </div>
    );
  }

  RenderMainPoint = () => {
    const { job, LinkComponent, showShortenedLocation, hideSalary } = this.props;
    return (
      <IconList
        list={[
          {
            content: <LocationGroup locations={job.locations} LinkComponent={LinkComponent} showShortenedLocation={showShortenedLocation} />,
            iconType: 'location'
          },
          { content: job.salary, iconType: 'salary', show: job.salary && !hideSalary }
        ]}
      />
    );
  }

  RenderSellingPoint = ({ jobAdTypeOption }) => {
    const { job, isSplitView } = this.props;
    return jobAdTypeOption.showSellingPoint && !isSplitView && job.sellingPoints && (
      <ul className={styles.sellingPoints}>
        {job.sellingPoints.map((sellingPoint, i) => (
          <li key={i}>
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
  }

  RenderCompanyLogo = ({ jobAdTypeOption }) => {
    const { job } = this.props;
    return jobAdTypeOption.showCompanyLogo ?
      <img className={styles.companyLogo} src={job.companyLogoUrl} /> :
      <div className={styles.companyLogo} />
    ;
  }

  RenderCompanyPic = ({ jobAdTypeOption }) => {
    const { job } = this.props;
    return jobAdTypeOption.showCompanyPic && job.companyPictureUrl && (
      <div className={styles.companyPicWrapper}>
        <img
          className={styles.companyPic}
          src={job.companyPictureUrl}
        />
      </div>
    );
  }

  RenderShelfLink = ({ mobileOnly, desktopOnly }) => {
    const { job } = this.props;
    const { shelfSectionOpen } = this.state;
    return (
      <ShelfButton
        mobileOnly={mobileOnly}
        desktopOnly={desktopOnly}
        job={job}
        onClick={this.handleShelfSectionToggle}
        isOpen={shelfSectionOpen}
      />
    );
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
      LinkComponent,
      borderlessRoot = false,
      isVariation,
      isSplitView
    } = this.props;
    const { shelfSectionOpen } = this.state;
    const jobAdTypeOption = getJobAdTypeOption(jobAdType);
    return (
      <Card
        className={classnames(styles.container, {
          [styles.borderRoot]: !borderlessRoot,
          [styles.highlightedBg]: jobAdTypeOption.showHighlightedBg,
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
          <this.RenderJobTitle />
          <this.RenderCompany />
          <div className={styles.flexRow}>
            <div className={styles.leftContent}>
              <this.RenderDescription jobAdTypeOption={jobAdTypeOption} />
              { isVariation && <this.RenderMainPoint /> }
              <this.RenderSellingPoint jobAdTypeOption={jobAdTypeOption} />
              { !isVariation && <this.RenderMainPoint />}
              <this.RenderShelfLink mobileOnly={isVariation && !isSplitView} />
            </div>
            <div className={styles.rightContent}>
              <this.RenderCompanyLogo jobAdTypeOption={jobAdTypeOption} />
              <this.RenderCompanyPic jobAdTypeOption={jobAdTypeOption} />
              { isVariation && !isSplitView && <this.RenderShelfLink desktopOnly /> }
            </div>
          </div>
          <ShelfSection
            shelf={job.shelf}
            LinkComponent={LinkComponent}
            showShelfSection={shelfSectionOpen}
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
JobCard.propTypes = {
  keyword: PropTypes.string,
  job: PropTypes.shape({
    company: CompanyLinkPropTypes,
    jobTitle: PropTypes.string.isRequired,
    jobUrl: PropTypes.string.isRequired,
    sellingPoints: PropTypes.arrayOf(PropTypes.string),
    companyPictureUrl: PropTypes.string,
    companyLogoUrl: PropTypes.string,
    description: PropTypes.string,
    locations: LocationsPropTypes,
    salary: PropTypes.string,
    postingDuration: PropTypes.string.isRequired,
    featuredLabel: PropTypes.string,
    classifiedLabel: PropTypes.string,
    confidentialLabel: PropTypes.string,
    shelf: ShelfSectionPropTypes,
    appliedDate: PropTypes.string,
    isExpired: PropTypes.bool.isRequired,
    qualification: PropTypes.string,
    careerLevel: PropTypes.string,
    workExperience: PropTypes.string,
    employmentTerm: PropTypes.string
  }).isRequired,
  jobAdType: PropTypes.string,
  LinkComponent: PropTypes.func,
  TitleLinkComponent: PropTypes.func,
  isSelected: PropTypes.bool,
  viewed: PropTypes.bool,
  applied: PropTypes.bool,
  bookmarked: PropTypes.oneOf([BOOKMARKED, NOT_BOOKMARKED]),
  onBookmarkClick: PropTypes.func,
  showShortenedLocation: PropTypes.bool,
  borderlessRoot: PropTypes.bool,
  hideSalary: PropTypes.bool,
  isSplitView: PropTypes.bool,
  isVariation: PropTypes.bool
};
