import React from 'react';
import PropTypes from 'prop-types';
import IconPack from './Icon.path';
import styles from './Icon.less';
import classnames from 'classnames';

export default function Icon({
  type,
  className,
  size,
  title,
  rotation,
  animation,
  smoothRotate,
  ...restProps
}) {
  const iconData = IconPack.find(x => x.name === type);

  return (
    <span
      className={classnames({
        [styles.root]: true,
        [styles.small]: size === 'small',
        [styles.large]: size === 'large',
        [styles.smallBounce]: animation === 'bounce',
        [styles.popIn]: animation === 'popIn'
      })}>
      <svg
        xmlns={'http://www.w3.org/2000/svg'}
        preserveAspectRatio={'xMidyMid'}
        aria-hidden={'true'}
        focusable={'false'}
        {...restProps}
        className={classnames({
          [className]: className,
          [styles.rotate90]: rotation === '90deg',
          [styles.rotate90cc]: rotation === '-90deg',
          [styles.rotate180]: rotation === '180deg',
          [styles.rotate180cc]: rotation === '-180deg',
          [styles.smoothRotate]: smoothRotate
        })} viewBox="0 0 100 100" role="img">
        <title>{title ? title : iconData.label}</title>
        <path d={iconData.path} fill="currentColor" role="presentation" />
      </svg>
    </span>
  );
}

Icon.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf([
    'add',
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
    'chevron',
    'comments',
    'company',
    'companyProfile',
    'currentStatus',
    'dentalInsurance',
    'doublePay',
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
    'skills',
    'talentSearch',
    'telephone',
    'timestamp',
    'transportAllowance',
    'travelAllowance',
    'twitter',
    'unlocked',
    'upload',
    'youtube'
  ]),
  className: PropTypes.string,
  size: PropTypes.oneOf(['', 'small', 'large']),
  rotation: PropTypes.oneOf(['', '90deg', '-90deg', '180deg', '-180deg']),
  animation: PropTypes.oneOf(['', 'bounce', 'popIn']),
  smoothRotate: PropTypes.bool
};

Icon.defaultProps = {
  type: '',
  size: '',
  rotation: '',
  animation: '',
  smoothRotate: false
};

