import React from 'react';
import PropTypes from 'prop-types';
import IconPack from './Icon.path';
import styles from './Icon.less';
import classnames from 'classnames';

export default function Icon({
  animation,
  className,
  lineHeight,
  rotation,
  size,
  smoothRotate,
  title,
  type,
  svgClassName,
  ...restProps
}) {
  const iconData = IconPack.find(x => x.name === type);

  return (
    <span
      className={classnames({
        [styles.root]: true,
        [styles.sizeSmall]: size === 'small',
        [styles.sizeNormal]: size === 'normal',
        [styles.sizeLarge]: size === 'large',
        [styles.smallBounce]: animation === 'bounce',
        [styles.popIn]: animation === 'popIn',
        [styles.conversational]: lineHeight === 'conversational',
        [styles.lineHeightIntimate]: lineHeight === 'intimate',
        [styles.lineHeightLoud]: lineHeight === 'loud',
        [styles.lineHeightScreaming]: lineHeight === 'screaming',
        [styles.lineHeightShouting]: lineHeight === 'shouting',
        [styles.lineHeightWaving]: lineHeight === 'waving',
        [styles.lineHeightWhispering]: lineHeight === 'whispering',
        [styles.lineHeightWhistling]: lineHeight === 'whistling',
        [styles.lineHeightYelling]: lineHeight === 'yelling',
        [className]: className
      })} role="presentation">
      <svg
        xmlns={'http://www.w3.org/2000/svg'}
        aria-hidden={'true'}
        focusable={'false'}
        {...restProps}
        className={classnames({
          [svgClassName]: svgClassName,
          [styles.rotate90]: rotation === '90deg',
          [styles.rotate90cc]: rotation === '-90deg',
          [styles.rotate180]: rotation === '180deg',
          [styles.rotate180cc]: rotation === '-180deg',
          [styles.rotateReset]: rotation === 'reset',
          [styles.smoothRotate]: smoothRotate
        })} viewBox="0 0 100 100" role="img">
        <title>{title ? title : iconData.label}</title>
        <path d={iconData.path} />
      </svg>
    </span>
  );
}

Icon.propTypes = {
  animation: PropTypes.oneOf(['', 'bounce', 'popIn']),
  className: PropTypes.string,
  svgClassName: PropTypes.string,
  lineHeight: PropTypes.oneOf(['', 'conversational', 'intimate', 'loud', 'screaming', 'shouting', 'waving', 'whispering', 'whistling', 'yelling']),
  rotation: PropTypes.oneOf(['', '90deg', '-90deg', '180deg', '-180deg', 'reset']),
  size: PropTypes.oneOf(['', 'large', 'normal', 'small']),
  smoothRotate: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.oneOf([
    'add',
    'alert',
    'android',
    'appDownload',
    'apple',
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
    'chime',
    'comments',
    'company',
    'companyProfile',
    'country',
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
  ])
};

Icon.defaultProps = {
  animation: '',
  className: '',
  lineHeight: '',
  rotation: '',
  size: '',
  smoothRotate: false,
  type: ''
};
