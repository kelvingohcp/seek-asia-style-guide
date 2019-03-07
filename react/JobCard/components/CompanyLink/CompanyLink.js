import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './CompanyLink.less';
import { getParts } from '../../jobCardHelper.js';
import defaultLink from '../Link/Link';
import { trackLinkType } from '../../JobCard';
import { CompanyPropTypes } from '../../JobCardPropTypes';

const CompanyLink = ({ name, link, title, keyword = '', LinkComponent = defaultLink, trackLinkClicked }) => {
  const companyParts = getParts(name, keyword);
  const renderedParts = companyParts && companyParts.map((part, index) => (
    <span
      className={classnames({ [styles.highlight]: part.highlight })}
      key={index}>
      {part.text}
    </span>
  ));

  const companyText = (
    <span className={classnames({ [styles.companyName]: link })}>
      {renderedParts || name}
    </span>);

  if (link) {
    return (<LinkComponent link={link} className={styles.companyLink} title={title} onClick={() => trackLinkClicked(trackLinkType.company)}>{companyText}</LinkComponent>);
  }

  return companyText;
};

export default CompanyLink;

CompanyLink.propTypes = {
  ...CompanyPropTypes,
  keyword: PropTypes.string,
  LinkComponent: PropTypes.func,
  trackLinkClicked: PropTypes.func
};
