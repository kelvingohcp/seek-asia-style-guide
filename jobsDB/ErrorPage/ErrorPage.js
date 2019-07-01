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

export default function JobsDBErrorPage({ texts, button }) {
  return (
    <Card transparent>
      <Section className={styles.section}>
        <ErrorSVG />
      </Section>
      {
        texts ? <Section className={styles.section}>
          <Text yelling>
            { texts.headline || '' }
          </Text>
          <Text secondary loud className={styles.subTitle}>
            { texts.subline || '' }
          </Text>
        </Section> : null
      }
      <Section className={styles.section}>
        <Button
          color="callToAction"
          className={styles.retryButton}
          onClick={(button && button.onClick) || reload}>
          {(button && button.text) || 'Retry'}
        </Button>
      </Section>
    </Card>
  );
}

JobsDBErrorPage.propTypes = {
  texts: PropTypes.object,
  button: PropTypes.object
};

JobsDBErrorPage.displayName = 'JobsDBErrorPage';
