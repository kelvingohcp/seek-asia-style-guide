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

const JobTitlePart = ({ children, isHighlighted }) => (<Text
  strong
  whistling
  className={classnames(styles.jobTitle, { [styles.titleKeyword]: isHighlighted })}>
  {children}
</Text>);
JobTitlePart.propTypes = {
  children: PropTypes.string.isRequired,
  isHighlighted: PropTypes.bool
};

const JobTitleLink = ({ keyword, job: { jobTitle, jobUrl }, LinkComponent = defaultLink, viewed, trackLinkClicked }) => {
  const keywordParts = getParts(jobTitle, keyword);

  const title = keywordParts ? (
    <Fragment>
      {
        keywordParts.map((part, index) => {
          return (
            <JobTitlePart key={index} isHighlighted={part.highlight}>
              {part.text}
            </JobTitlePart>
          );
        })
      }
    </Fragment>
  ) : <JobTitlePart>{jobTitle}</JobTitlePart>;

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
export { JobTitlePart as JobTitlePartForTest };
