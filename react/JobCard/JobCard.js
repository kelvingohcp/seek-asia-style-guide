import React from 'react';
import PropTypes from 'prop-types';

import Badge from '../Badge/Badge';
import Text from '../Text/Text';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Section from '../Section/Section';
import Icon from '../Icon/Icon';
import ChevronIcon from '../ChevronIcon/ChevronIcon';
import LocationIcon from '../LocationIcon/LocationIcon';
import MoneyIcon from '../MoneyIcon/MoneyIcon';
import styles from './JobCard.less';
import classnames from 'classnames';
import { getJobAdTypeOption } from './jobCardHelper.js';
import LocationGroup, {
  LocationsPropTypes
} from './components/LocationGroup/LocationGroup';
import CompanyLink, {
  CompanyLinkPropTypes
} from './components/CompanyLink/CompanyLink';
import JobTitleLink from './components/JobTitleLink/JobTitleLink';
import ShelfSection, {
  ShelfSectionPropTypes
} from './components/ShelfSection/ShelfSection';

const BOOKMARKED = 'bookmarked';
const NOT_BOOKMARKED = 'notBookmarked';

export default class JobCard extends React.Component {
  constructor() {
    super();

    this.state = {
      shelfSectionOpen: false
    };
  }

  handleShelfSectionToggle = e => {
    this.setState({ shelfSectionOpen: !this.state.shelfSectionOpen });
    e.stopPropagation();
  };

  hasShelfLinks(shelfLinks) {
    return (
      shelfLinks &&
      shelfLinks.some(
        shelfLink => shelfLink && shelfLink.items && shelfLink.items.length > 0
      )
    );
  }

  render() {
    const { shelfSectionOpen } = this.state;
    const {
      job,
      keyword = '',
      jobAdType,
      LinkComponent,
      TitleLinkComponent,
      viewed,
      applied = false,
      isSelected,
      bookmarked,
      onBookmarkClick,
      showShortenedLocation,
      borderlessRoot = false
    } = this.props;
    const jobAdTypeOption = getJobAdTypeOption(jobAdType);
    return (
      <div className={styles.container}>
        {bookmarked && (
          <Button className={(styles.bookmarkButton)} bookmarked={bookmarked} onBookmarkClick={onBookmarkClick}>
            {
              bookmarked === BOOKMARKED ?
                (<Icon animation="bounce" size="small" type="bookmark" className={(styles.bookmarked)} />) :
                (<Icon size="small" type="bookmark" />)
            }
          </Button>
        )}
        <Card
          className={classnames(styles.root, {
            [styles.borderRoot]: !borderlessRoot,
            [styles.borderlessRoot]: borderlessRoot,
            [styles.highlightedBg]: jobAdTypeOption.showHighlightedBg,
            [styles.selected]: isSelected
          })}>
          <Section
            className={classnames(styles.headerSection, {
              [styles.withBookmark]: bookmarked
            })}>
            { (applied || job.isExpired) && (
              <span className={styles.titleBadge}>
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
          </Section>
          <Section className={styles.bodySection}>
            <div className={styles.bodyDetailsWrapper}>
              <Text intimate baseline={false} className={styles.company}>
                {job.classifiedLabel && (
                  <span className={styles.classifiedLabel}>
                    {job.classifiedLabel}
                  </span>
                )}
                {job.confidentialLabel && (
                  <span className={styles.confidentialLabel}>
                    {job.confidentialLabel}
                  </span>
                )}
                {job.company && (
                  <CompanyLink
                    company={job.company}
                    keyword={keyword}
                    LinkComponent={LinkComponent}
                  />
                )}
              </Text>
              {jobAdTypeOption.showSellingPoint &&
              job.sellingPoints && (
                <div
                  className={classnames(styles.sellingPointsSection, {
                    [styles.withDescription]:
                      jobAdTypeOption.showDescription && job.description
                  })}>
                  <ul className={styles.sellingPoints}>
                    {job.sellingPoints.map((sellingPoint, i) => {
                      return (
                        <li key={i}>
                          <Text
                            whispering
                            baseline={false}
                            className={styles.sellingPoint}>
                            {sellingPoint}
                          </Text>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
              {jobAdTypeOption.showDescription &&
              job.description && (
                <div className={styles.jobDescriptionSection}>
                  <Text
                    whispering
                    baseline={false}
                    className={styles.bodyDescriptionText}>
                    {job.description}
                  </Text>
                </div>
              )}
            </div>
            {jobAdTypeOption.showCompanyPic &&
            job.companyPictureUrl && (
              <div className={styles.companyPicWrapper}>
                <img
                  className={styles.companyPic}
                  src={job.companyPictureUrl}
                />
              </div>
            )}
          </Section>
          <Section className={styles.footerSection}>
            <div className={styles.footerLeft}>
              <div className={styles.jobInfoContainer}>
                <div className={styles.jobInfoList}>
                  <Text whispering baseline={false} className={styles.jobInfo}>
                    <LocationIcon className={styles.jobInfoIcon} />
                    {job.locations && (
                      <LocationGroup
                        locations={job.locations}
                        LinkComponent={LinkComponent}
                        showShortenedLocation={showShortenedLocation}
                      />
                    )}
                  </Text>
                  {job.salary && (
                    <Text whispering baseline={false} className={styles.jobInfo}>
                      <MoneyIcon className={styles.jobInfoIcon} />
                      <span>{job.salary}</span>
                    </Text>
                  )}
                </div>
                <div>
                  {job.featuredLabel && (
                    <span className={styles.featuredLabel}>
                      <Badge color="new" label={job.featuredLabel} />
                    </span>
                  )}
                  {job.appliedDate ? (
                    <Text
                      whispering
                      baseline={false}
                      className={styles.applyDate}>
                      {job.appliedDate}
                    </Text>
                  ) : (
                    <Text
                      whispering
                      baseline={false}
                      className={styles.postingDuration}>
                      {job.postingDuration}
                    </Text>
                  )}
                  {this.hasShelfLinks(job.shelf && job.shelf.shelfLinks) && (
                    <span className={styles.shelfToggleContainer}>
                      <Text
                        whispering
                        baseline={false}
                        className={styles.separatorDot}>
                      •
                      </Text>
                      <Button
                        color="hyperlink"
                        className={styles.shelfToggle}
                        onClick={this.handleShelfSectionToggle}>
                        <Text
                          whispering
                          baseline={false}
                          className={styles.shelfToggleText}>
                          {shelfSectionOpen ? 'less' : 'more'}{' '}
                          <ChevronIcon
                            direction={shelfSectionOpen ? 'up' : 'down'}
                            svgClassName={styles.shelfToggleIcon}
                          />
                        </Text>
                      </Button>
                    </span>
                  )}
                </div>
              </div>
            </div>
            {jobAdTypeOption.showCompanyLogo && (
              <img className={styles.companyLogo} src={job.companyLogoUrl} />
            )}
          </Section>
          {this.hasShelfLinks(job.shelf && job.shelf.shelfLinks) && (
            <ShelfSection
              shelf={job.shelf}
              LinkComponent={LinkComponent}
              showShelfSection={shelfSectionOpen}
            />
          )}
        </Card>
      </div>
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
    isExpired: PropTypes.bool.isRequired
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
  borderlessRoot: PropTypes.bool
};
