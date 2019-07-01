import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './JobTitleLink.less';
import classnames from 'classnames';
import { getParts } from '../../jobCardHelper.js';
import { Text } from 'seek-asia-style-guide/react';
import defaultLink from '../Link/Link';
import { trackLinkType } from '../../JobCard';

const JobTitleLinkPropTypes = PropTypes.shape({
  jobTitle: PropTypes.string,
  jobUrl: PropTypes.string
});

const JobTitleLink = ({ keyword, job: { jobTitle, jobUrl }, LinkComponent = defaultLink, viewed, trackLinkClicked }) => {
  let title = (<Text whistling strong className={styles.jobTitle}>{jobTitle}</Text>);
  const keywordParts = getParts(jobTitle, keyword);

  if (keywordParts) {
    title = (
      <Fragment>
        {
          keywordParts.map((part, index) => {
            return (
              <Text
                strong
                whistling
                className={classnames(styles.jobTitle, { [styles.titleKeyword]: part.highlight })}
                key={index}>
                {part.text}
              </Text>
            );
          })
        }
      </Fragment>
    );
  }

  return <LinkComponent link={jobUrl} className={classnames({ [styles.jobTitleLink]: !viewed, [styles.jobTitleLinkVisited]: viewed })} rel="noopener noreferrer" onClick={() => trackLinkClicked(trackLinkType.jobTitle)}>{title}</LinkComponent>;
};

JobTitleLink.propTypes = {
  keyword: PropTypes.string,
  showJobSplit: PropTypes.bool,
  isDesktop: PropTypes.bool,
  job: JobTitleLinkPropTypes.isRequired,
  LinkComponent: PropTypes.func,
  viewed: PropTypes.bool,
  trackLinkClicked: PropTypes.func
};

export default JobTitleLink;
