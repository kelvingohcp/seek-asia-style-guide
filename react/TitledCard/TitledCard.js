import React from 'react';
import PropTypes from 'prop-types';
import styles from './TitledCard.less';
import { Card, Section, Text } from 'seek-asia-style-guide/react';

export default function TitledCard({ children, text, ...restProps }) {
  return (
    <Card {...restProps}>
      <Section>
        <Text yelling strong>
          {text}
        </Text>
        <hr className={styles.line} />
        {children}
      </Section>
    </Card>
  );
}

TitledCard.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired
};
