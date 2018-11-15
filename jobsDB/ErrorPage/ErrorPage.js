import ErrorIcon from './ErrorIcon.svg';
import styles from './ErrorPage.less';
import React from 'react';
import Icon from '../../react/private/Icon/Icon';
import { Card, Section, Text, Button } from 'seek-asia-style-guide/react';

const retry = () => location.reload();

export default function JobsDBErrorPage() {
  return (
    <Card className={styles.card}>
      <Section className={styles.section}>
        <Icon markup={ErrorIcon} svgClassName={styles.failIcon} />
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
          onClick={retry}>
            Retry
        </Button>
      </Section>
    </Card>
  );
}

JobsDBErrorPage.displayName = 'JobsDBErrorPage';
