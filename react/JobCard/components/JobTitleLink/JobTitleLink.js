import React from 'react';
import PropTypes from 'prop-types';
import styles from './JobTitleLink.less';
import classnames from 'classnames';
import { getParts } from '../../jobCardHelper.js';
import { Text } from 'seek-asia-style-guide/react';
import defaultLink from '../Link/Link';

const JobTitleLinkPropTypes = PropTypes.shape({
  jobTitle: PropTypes.string,
  jobUrl: PropTypes.string
});

const JobTitleLink = ({ keyword, job: { jobTitle, jobUrl }, LinkComponent = defaultLink, viewed }) => {
  let title = (<Text whistling strong className={styles.jobTitle}>{jobTitle}</Text>);
  const keywordParts = getParts(jobTitle, keyword);

  if (keywordParts) {
    title = (
      <span>
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
      </span>
    );
  }

  return <LinkComponent linkType="job-title-link" link={jobUrl} className={classnames({ [styles.jobTitleLink]: !viewed, [styles.jobTitleLinkVisited]: viewed })} rel="noopener noreferrer">{title}</LinkComponent>;
};

JobTitleLink.propTypes = {
  keyword: PropTypes.string,
  showJobSplit: PropTypes.bool,
  isDesktop: PropTypes.bool,
  job: JobTitleLinkPropTypes.isRequired,
  LinkComponent: PropTypes.func,
  viewed: PropTypes.bool
};

export default JobTitleLink;
