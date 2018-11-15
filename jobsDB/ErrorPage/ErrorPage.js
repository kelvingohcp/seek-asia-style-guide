import ErrorIcon from './ErrorIcon.svg';
import PropTypes from 'prop-types';
import styles from './ErrorPage.less';
import React from 'react';
import { Card, Section, Text, Button } from 'seek-asia-style-guide/react';

const reload = () => location.reload();

const ErrorSVG = () => {
  const svgWithClasses = ErrorIcon
    .replace('<svg ', `<svg class="${styles.failIcon}" `);

  return (
    <span dangerouslySetInnerHTML={{ __html: svgWithClasses }} /> // eslint-disable-line react/no-danger
  );
};

export default function JobsDBErrorPage({ onRetryClick }) {
  return (
    <Card transparent>
      <Section className={styles.section}>
        <ErrorSVG />
      </Section>
      <Section className={styles.section}>
        <Text yelling>
            Hmm... we can't seem to load the screen
        </Text>
        <Text secondary loud className={styles.subTitle}>
            Keep calm and retry first
        </Text>
      </Section>
      <Section className={styles.section}>
        <Button
          color="callToAction"
          isJobsDB
          className={styles.retryButton}
          onClick={onRetryClick || reload}>
            Retry
        </Button>
      </Section>
    </Card>
  );
}

JobsDBErrorPage.propTypes = {
  onRetryClick: PropTypes.function
};

JobsDBErrorPage.displayName = 'JobsDBErrorPage';
