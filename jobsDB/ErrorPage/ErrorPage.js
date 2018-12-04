import ErrorIcon from './ErrorIcon.svg';
import PropTypes from 'prop-types';
import styles from './ErrorPage.less';
import React from 'react';
import { Card, Section, Text, Button } from 'seek-asia-style-guide/react';

const reload = () => location.reload();
const PARTS = {
  HEADLINE: 'headLine',
  SUBLINE: 'subLine'
};

const ErrorSVG = () => {
  const svgWithClasses = ErrorIcon
    .replace('<svg ', `<svg class="${styles.failIcon}" `);

  return (
    <span dangerouslySetInnerHTML={{ __html: svgWithClasses }} /> // eslint-disable-line react/no-danger
  );
};

const getMessage = (part, customeText) => {
  const defaultHeadLine = 'Hmm... we can\'t seem to load the screen';
  const defaultSubLine = 'Keep calm and retry first';

  if (customeText) {
    if (part === PARTS.HEADLINE) {
      return customeText.headline || '';
    } else if (part === PARTS.SUBLINE) {
      return customeText.subline || '';
    }
  } else if (part === PARTS.HEADLINE) {
    return defaultHeadLine;
  } else if (part === PARTS.SUBLINE) {
    return defaultSubLine;
  }

  return '';
};

export default function JobsDBErrorPage({ customeText, customeButton }) {
  return (
    <Card transparent>
      <Section className={styles.section}>
        <ErrorSVG />
      </Section>
      <Section className={styles.section}>
        <Text yelling>
          { getMessage(PARTS.HEADLINE, customeText) }
        </Text>
        <Text secondary loud className={styles.subTitle}>
          { getMessage(PARTS.SUBLINE, customeText) }
        </Text>
      </Section>
      <Section className={styles.section}>
        <Button
          color="callToAction"
          isJobsDB
          className={styles.retryButton}
          onClick={(customeButton && customeButton.onClick) || reload}>
          {(customeButton && customeButton.text) || 'Retry'}
        </Button>
      </Section>
    </Card>
  );
}

JobsDBErrorPage.propTypes = {
  customeText: PropTypes.object,
  customeButton: PropTypes.object
};

JobsDBErrorPage.displayName = 'JobsDBErrorPage';
