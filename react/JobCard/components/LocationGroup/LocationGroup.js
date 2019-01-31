import React from 'react';
import PropTypes from 'prop-types';
import styles from './LocationGroup.less';
import defaultLink from '../Link/Link';
import { trackLinkType } from '../../JobCard';

export const LocationsPropTypes = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  child: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    child: PropTypes.shape({
      name: PropTypes.string
    })
  })
}));

const renderLocation = ({ link, name, title, child, LinkComponent, showShortenedLocation, key, trackLinkClicked }) => {
  const locationLink = (link) ?
    (<LinkComponent link={link} className={styles.locationLink} key={key} title={title} onClick={() => trackLinkClicked(trackLinkType.location)}>{name}</LinkComponent>) :
    (<span className={styles.locationName} key={key}>{name}</span>);
  if (child) {
    if (showShortenedLocation) {
      return [...renderLocation({ ...child, LinkComponent, showShortenedLocation, key: `${key}1`, trackLinkClicked })];
    }
    return [locationLink, ' > ', ...renderLocation({ ...child, LinkComponent, showShortenedLocation, key: `${key}1`, trackLinkClicked })];
  }
  return [locationLink];
};

const LocationGroup = ({ locations, LinkComponent = defaultLink, showShortenedLocation, trackLinkClicked }) => {
  return locations.map((location, index) =>
    renderLocation({ ...location, LinkComponent, showShortenedLocation, key: index, trackLinkClicked })
  ).reduce((prev, curr) => [prev, ', ', ...curr]);
};

export default LocationGroup;

LocationGroup.propTypes = {
  locations: LocationsPropTypes.isRequired,
  LinkComponent: PropTypes.func,
  showShortenedLocation: PropTypes.bool,
  trackLinkClicked: PropTypes.func
};
