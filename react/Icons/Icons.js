import React from 'react';
import PropTypes from 'prop-types';
import IconPack from './Icons.path';

const Icons = ({ iconName, ...restProps }) => {
  const getItem = IconPack.find(x => x.name === iconName);
  return (getItem) ? (
    <svg {...restProps} width="24" height="24" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
      <title>{getItem.name}</title>
      <path d={getItem.path} fill="currentColor" />
    </svg>
  ) : null;
};

Icons.propTypes = {
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
