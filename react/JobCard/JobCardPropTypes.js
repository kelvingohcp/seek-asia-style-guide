import PropTypes from 'prop-types';
import { LocationsPropTypes } from './components/LocationGroup/LocationGroup';
import { CompanyLinkPropTypes } from './components/CompanyLink/CompanyLink';
import { ShelfPropTypes } from './components/ShelfSection/ShelfSectionPropTypes';
import { BOOKMARKED, NOT_BOOKMARKED } from './jobCardHelper.js';

export const JobCardPropTypes = {
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
    shelf: ShelfPropTypes,
    appliedDate: PropTypes.string,
    isExpired: PropTypes.bool,
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
  trackLinkClicked: PropTypes.func,
  showShortenedLocation: PropTypes.bool,
  borderlessRoot: PropTypes.bool,
  hideSalary: PropTypes.bool,
  isSplitView: PropTypes.bool,
  isVariation: PropTypes.bool
};
