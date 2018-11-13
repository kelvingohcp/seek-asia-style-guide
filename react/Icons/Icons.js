import React from 'react';
import PropTypes from 'prop-types';
import IconPack from './Icons.path';
import Icon from '../private/Icon/Icon';

const getIconSvg = (getItem, title) => {
  return (
    `<svg width="24" height="24" viewBox="0 0 100 100">
      <title>${title ? title : getItem.name}</title>
      <path d="${getItem.path}" fill="currentColor" />
    </svg>`
  );
};

const Icons = ({ iconName, title, ...restProps }) => {
  const iconData = IconPack.find(x => x.name === iconName);
  if (iconData) {
    const svgMarkup = getIconSvg(iconData, title);
    return <Icon markup={svgMarkup} {...restProps} />;
  }
  return null;
};

Icons.propTypes = {
  title: PropTypes.string,
  iconName: PropTypes.oneOf([
    'add',
    'advance',
    'alert',
    'application',
    'applicationHistory',
    'birthdate',
    'bonus',
    'bookmark',
    'calendar',
    'careerInsight',
    'careerLevel',
    'certifications',
    'check',
    'comments',
    'company',
    'companyProfile',
    'currentStatus',
    'dentalInsurance',
    'doublePay',
    'down',
    'download',
    'edit',
    'education',
    'employer',
    'employmentType',
    'exit',
    'expand',
    'experience',
    'expired',
    'extend',
    'facebook',
    'featured',
    'fiveDayWork',
    'flexibleWorkingHours',
    'freeShuttleBus',
    'gratuity',
    'hidden',
    'home',
    'housingAllowance',
    'information',
    'instagram',
    'jobAd',
    'jobAlert',
    'jobFunction',
    'jobInvitation',
    'language',
    'lifeInsurance',
    'location',
    'locked',
    'mail',
    'medical',
    'menu',
    'myJobsDB',
    'negative',
    'overtimePay',
    'pastApplication',
    'positive',
    'preferences',
    'previous',
    'profileFemale',
    'profileMale',
    'promotion',
    'purchaseCredits',
    'RC',
    'refresh',
    'remove',
    'resources',
    'resume',
    'rss',
    'salary',
    'search',
    'settings',
    'share',
    'show',
    'sivaRC',
    'skills',
    'talentSearch',
    'telephone',
    'timestamp',
    'top',
    'transportAllowance',
    'travelAllowance',
    'twitter',
    'unlocked',
    'upload',
    'youtube'
  ]).isRequired
};

Icons.defaultProps = {
  iconName: 'birthdate'
};

export default Icons;
