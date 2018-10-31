import React from 'react';
import PropTypes from 'prop-types';
import FooterHK from './FooterHK/FooterHK';

const Footer = ({ language, country, isExpandedVersion, showHeaderActionTrayOffset = true, ...restProps }) => {
  if (country === 'hk' && isExpandedVersion) {
    return (<FooterHK language={language} country={country} isExpandedVersion={isExpandedVersion} showHeaderActionTrayOffset={showHeaderActionTrayOffset} {...restProps} />);
  }

  return (
    <FooterHK
      language={language}
      country={country}
      isExpandedVersion={false}
      showHeaderActionTrayOffset={showHeaderActionTrayOffset}
      {...restProps}
    />);
};

Footer.propTypes = {
  language: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  showHeaderActionTrayOffset: PropTypes.bool,
  isExpandedVersion: PropTypes.bool
};

export default Footer;
