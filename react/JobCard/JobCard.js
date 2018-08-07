import React from 'react';
import PropTypes from 'prop-types';

import Badge from '../Badge/Badge';
import Text from '../Text/Text';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Section from '../Section/Section';
import ChevronIcon from '../ChevronIcon/ChevronIcon';
import LocationIcon from '../LocationIcon/LocationIcon';
import MoneyIcon from '../MoneyIcon/MoneyIcon';
import styles from './JobCard.less';
import classnames from 'classnames';
import { getJobAdTypeOption } from './jobCardHelper.js';
import LocationGroup, { LocationsPropTypes } from './components/LocationGroup/LocationGroup';
import CompanyLink, { CompanyLinkPropTypes } from './components/CompanyLink/CompanyLink';
import JobTitleLink from './components/JobTitleLink/JobTitleLink';
import ShelfSection, { ShelfSectionPropTypes } from './components/ShelfSection/ShelfSection';

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
    return shelfLinks && shelfLinks.some(shelfLink => (shelfLink && shelfLink.items && shelfLink.items.length > 0));
  }

  render() {
    const { shelfSectionOpen } = this.state;
    const { isSelected } = this.props;
    const { job, keyword = '', jobAdType, LinkComponent, TitleLinkComponent, viewed } = this.props;
    const jobAdTypeOption = getJobAdTypeOption(jobAdType);

    return (
      <Card
        className={classnames(styles.root, {
          [styles.highlightedBg]: jobAdTypeOption.showHighlightedBg,
          [styles.selected]: isSelected
        })}>
        <Section className={styles.headerSection}>
          <JobTitleLink LinkComponent={TitleLinkComponent} viewed={viewed} keyword={keyword} job={job} />
        </Section>
        <Section className={styles.bodySection}>
          <div className={styles.bodyDetailsWrapper}>
            <Text intimate baseline={false} className={styles.company}>
              {job.classifiedLabel && (<span className={styles.classifiedLabel}>{job.classifiedLabel}</span>)}
              {job.confidentialLabel && (<span className={styles.confidentialLabel}>{job.confidentialLabel}</span>)}
              {job.company && <CompanyLink company={job.company} keyword={keyword} LinkComponent={LinkComponent} />}
            </Text>
            {jobAdTypeOption.showSellingPoint && job.sellingPoints && (
              <div
                className={classnames(styles.sellingPointsSection, { [styles.withDescription]: jobAdTypeOption.showDescription && job.description })}>
                <ul className={styles.sellingPoints} >
                  {job.sellingPoints.map((sellingPoint, i) => {
                    return (
                      <li key={i}><Text intimate baseline={false} className={styles.sellingPoint}>{sellingPoint}</Text></li>
                    );
                  })}
                </ul>
              </div>
            )}
            {jobAdTypeOption.showDescription && job.description && (
              <div className={styles.jobDescriptionSection}>
                <Text intimate baseline={false} className={styles.bodyDescriptionText}>{job.description}</Text>
              </div>
            )}
          </div>
          {jobAdTypeOption.showCompanyPic && job.companyPictureUrl && (
            <div className={styles.companyPicWrapper}>
              <img className={styles.companyPic} src={job.companyPictureUrl} />
            </div>
          )}
        </Section>
        <Section className={styles.footerSection}>
          <div className={styles.footerLeft}>
            <div className={styles.jobInfoContainer}>
              <div className={styles.jobInfoList}>
                <Text intimate baseline={false} className={styles.jobInfo}>
                  <LocationIcon className={styles.jobInfoIcon} />
                  {job.locations && <LocationGroup locations={job.locations} LinkComponent={LinkComponent} />}
                </Text>
                {job.salary && (<Text intimate baseline={false} className={styles.jobInfo}><MoneyIcon className={styles.jobInfoIcon} /><span>{job.salary}</span></Text>)}
              </div>
              <div>
                {job.featuredLabel && (<span className={styles.featuredLabel}><Badge color="new" label={job.featuredLabel} /></span>)}
                {job.appliedDate ? (
                  <Text whispering baseline={false} className={styles.applyDate}>{job.appliedDate}</Text>
                ) : (
                  <Text whispering baseline={false} className={styles.postingDuration}>{job.postingDuration}</Text>
                )}
                {this.hasShelfLinks(job.shelf && job.shelf.shelfLinks) &&
                  <Button color="hyperlink" className={styles.shelfToggle} onClick={this.handleShelfSectionToggle}>
                    <Text whispering baseline={false} className={styles.shelfToggleText}>
                      {shelfSectionOpen ? 'less' : 'more'} <ChevronIcon direction={shelfSectionOpen ? 'up' : 'down'} svgClassName={styles.shelfToggleIcon} />
                    </Text>
                  </Button>
                }
              </div>
            </div>
          </div>
          {jobAdTypeOption.showCompanyLogo && (
            <div className={styles.companyLogoWrapper}>
              <img className={styles.companyLogo} src={job.companyLogoUrl} />
            </div>
          )}
        </Section>
        {this.hasShelfLinks(job.shelf && job.shelf.shelfLinks) && <ShelfSection shelf={job.shelf} LinkComponent={LinkComponent} showShelfSection={shelfSectionOpen} />}
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
    appliedDate: PropTypes.string
  }).isRequired,
  jobAdType: PropTypes.string,
  LinkComponent: PropTypes.func,
  TitleLinkComponent: PropTypes.func,
  isSelected: PropTypes.bool,
  viewed: PropTypes.bool
};
