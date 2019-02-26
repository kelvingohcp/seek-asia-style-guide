import React from 'react';
import PropTypes from 'prop-types';
import styles from './CompanyLink.less';
import { getParts } from '../../jobCardHelper.js';
import defaultLink from '../Link/Link';
import { trackLinkType } from '../../JobCard';

export const CompanyLinkPropTypes = PropTypes.shape({
  name: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string
});

const CompanyLink = ({ company, keyword = '', LinkComponent = defaultLink, trackLinkClicked }) => {
  const { name, link, title } = company;
  if (!name) {
    return null;
  }

  const companyParts = getParts(name, keyword);

  const companyText = (<span className={link ? styles.companyName : null}>
    {
      companyParts && companyParts.map((part, index) => {
        return (
          <span
            className={part.highlight ? styles.highlight : null}
            key={index}>
            {part.text}
          </span>
        );
      }) || name
    }
  </span>);

  if (link) {
    return (<LinkComponent link={link} className={styles.companyLink} title={title} onClick={() => trackLinkClicked(trackLinkType.company)}>{companyText}</LinkComponent>);
  }

  return companyText;
};

export default CompanyLink;

CompanyLink.propTypes = {
  company: CompanyLinkPropTypes.isRequired,
  keyword: PropTypes.string,
  LinkComponent: PropTypes.func,
  trackLinkClicked: PropTypes.func
};
