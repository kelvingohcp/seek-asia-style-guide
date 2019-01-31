import Constants from '../Constants/Constants';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

const { JOBADTYPE_JOBSDB_DEFAULT, JOBADTYPE_JOBSDB_BRANDED, JOBADTYPE_JOBSTREET_DEFAULT, JOBADTYPE_JOBSTREET_STANDOUT } = Constants;

const jobsdbDefault = {
  showCompanyLogo: false,
  showCompanyPic: false,
  showHighlightedBg: false,
  showSellingPoint: true,
  showDescription: false
};
const jobsdbBranded = {
  showCompanyLogo: true,
  showCompanyPic: false,
  showHighlightedBg: false,
  showSellingPoint: true,
  showDescription: false
};
const jobstreetDefault = {
  showCompanyLogo: true,
  showCompanyPic: false,
  showHighlightedBg: false,
  showSellingPoint: false,
  showDescription: true
};
const jobstreetStandout = {
  showCompanyLogo: true,
  showCompanyPic: true,
  showHighlightedBg: true,
  showSellingPoint: true,
  showDescription: true
};

export const jobAdTypeOption = {
  [JOBADTYPE_JOBSDB_DEFAULT]: jobsdbDefault,
  [JOBADTYPE_JOBSDB_BRANDED]: jobsdbBranded,
  [JOBADTYPE_JOBSTREET_DEFAULT]: jobstreetDefault,
  [JOBADTYPE_JOBSTREET_STANDOUT]: jobstreetStandout
};

export const getParts = (text, query) => {
  if (!text || !query) {
    return null;
  }
  const matches = match(text, query);
  // No point to parse if matches is empty array
  if (matches.length === 0) {
    return null;
  }
  return parse(text, matches);
};

export const hasShelfLinks = shelfLinks => {
  return Boolean(
    shelfLinks &&
    shelfLinks.some(
      shelfLink => shelfLink && shelfLink.items && shelfLink.items.length > 0
    )
  );
};

export const BOOKMARKED = 'bookmarked';
export const NOT_BOOKMARKED = 'notBookmarked';
