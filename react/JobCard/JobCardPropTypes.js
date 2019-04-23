import PropTypes from 'prop-types';
import { LocationsPropTypes } from './components/LocationGroup/LocationGroup';
import { ShelfPropTypes } from './components/ShelfSection/ShelfSectionPropTypes';

export const CompanyPropTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  logoUrl: PropTypes.string,
  isPrivate: PropTypes.bool
};

export const JobType = {
  company: PropTypes.shape(CompanyPropTypes),
  jobTitle: PropTypes.string.isRequired,
  jobUrl: PropTypes.string.isRequired,
  sellingPoints: PropTypes.arrayOf(PropTypes.string),
  companyPictureUrl: PropTypes.string,
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
  qualificationName: PropTypes.string,
  careerLevelName: PropTypes.string,
  workExperienceName: PropTypes.string,
  employmentTermName: PropTypes.string,
  bannerUrl: PropTypes.string
};

export const JobCardPropTypes = {
  applied: PropTypes.bool,
  borderlessRoot: PropTypes.bool,
  hideSalary: PropTypes.bool,
  isSelected: PropTypes.bool,
  isSplitView: PropTypes.bool,
  isVariation: PropTypes.bool,
  enableBrandedAd: PropTypes.bool,
  job: PropTypes.shape(JobType).isRequired,
  jobAdType: PropTypes.string,
  keyword: PropTypes.string,
  LinkComponent: PropTypes.func,
  onBookmarkClick: PropTypes.func,
  showCompanyLogo: PropTypes.bool,
  showCompanyPic: PropTypes.bool,
  showDescription: PropTypes.bool,
  showHighlightedBg: PropTypes.bool,
  showSellingPoint: PropTypes.bool,
  showShortenedLocation: PropTypes.bool,
  showSavedStatus: PropTypes.bool,
  TitleLinkComponent: PropTypes.func,
  trackLinkClicked: PropTypes.func,
  viewed: PropTypes.bool,
  viewedDate: PropTypes.string
};
