import styles from './TypographyPreview.less';

import React from 'react';

const itemsStyles = [
  styles.screamingItem,
  styles.yellingItem
];

const sampleText = <span>AaBb<span className={styles.cc}>Cc</span></span>;

export default function TypographyPreview() {
  return (
    <div className={styles.root}>
      {itemsStyles.map((style, key) => (
        <div key={key} className={style}>
          <p className={styles.bold}>{sampleText}</p>
          <p>{sampleText}</p>
        </div>
      ))}
    </div>
  );
}
