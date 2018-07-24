import React from 'react';
import PropTypes from 'prop-types';
import styles from './TitledCard.less';
import { Card, Text } from 'seek-asia-style-guide/react';

export default function TitledCard({ children, text, ...restProps }) {
  return (
    <Card {...restProps}>
      <div className={styles.container}>
        <Text waving>{text}</Text>
        <hr className={styles.line} />
        {children}
      </div>
    </Card>
  );
}

TitledCard.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired
};
